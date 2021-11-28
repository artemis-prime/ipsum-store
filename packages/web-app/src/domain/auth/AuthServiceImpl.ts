import {
  action,
  makeObservable, 
  observable, 
} from 'mobx'

import type firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
 
import type {
  TenantOrg,
  TenantOrgRef,
  CreateUserParams,
  TenantOrgParams,
  UserTenantOrgsResponse,
  IpsumUser,
  StatusResponse 
} from '@ipsum-labs/dash-types'
 
import { COLLECTIONS } from '@ipsum-labs/dash-types'
import { errorToString, Bouncer } from '@artemis-prime/wfw/util'

import { 
  auth as firebaseAuth,
  firestore
} from '~/service/firebase'

import type AuthService from './AuthService'
 
  const EXT = {
   baseUrlForEmailLinks: process.env.EMAIL_LINK_BASE_URL
 }
 
 const adminBouncer = new Bouncer([
   'artemisprimedev@gmail.com',
   'zachkelling@gmail.com',
 ])
 
class AuthServiceImpl implements AuthService  {
 
  currentAuthUser: firebase.User | undefined = undefined
  currentIpsumUser: IpsumUser | undefined = undefined
  authStateLoading: boolean = false   // firebaseUser status is loading
  authQueryLoading: boolean = false   // any other query: currentIpsumUser, tenantOrgs, etc
  disposers: (() => void)[] = []

  constructor() {
    makeObservable(this, {
      currentAuthUser: observable,
      currentIpsumUser: observable,
      authStateLoading: observable,
      authQueryLoading: observable,
    })

      // https://mobx.js.org/observable-state.html#limitations
    makeObservable<AuthServiceImpl, 
      '_setQueryLoading' | 
      '_setCurrentAuthUser' | 
      '_setCurrentIpsumUser'
    >(this, {
      _setQueryLoading: action,
      _setCurrentAuthUser: action,
      _setCurrentIpsumUser: action
    })

    this.disposers.push( firebaseAuth.onAuthStateChanged( 
      async (fbUser: firebase.User | null) => {

        if (!fbUser) {
          console.log('LOGGED OUT')
          this._setCurrentAuthUser(undefined)
          this._setCurrentIpsumUser(undefined)
        }
        else {
          this._setCurrentAuthUser(fbUser)
          this._setQueryLoading(true)
          if (!this.currentIpsumUser || this.currentIpsumUser.uid !== fbUser.uid) {
            await this._refreshIpsumUser()
          }

            // An undefined result means a new user has been created in the system
            // but the IpsumUser hasn't yet. This can't be avoided.
            // We must call createNewUserFromEmailAndPassword() before creating the 
            // corresponding IpsumUser, since we need to know the uid to assign.
          if (!!this.currentIpsumUser) {
            this.disposers.push( await firestore
              .collection(COLLECTIONS.IPSUM_USERS)
              .doc(fbUser.uid)
              .onSnapshot( async (doc) => {
                if (doc.exists) {
                  let ipsumUser = doc.data() as IpsumUser
                  ipsumUser = await this._getIpsumUserTransientData(ipsumUser)
                  this._setCurrentIpsumUser(ipsumUser)
                }
              })
            )
          }
          this._setQueryLoading(false)
        }
      }
    ))
  }

  private _setCurrentAuthUser(u: firebase.User | undefined): void {
    this.currentAuthUser = u
  }

  private _setCurrentIpsumUser(u: IpsumUser | undefined): void {
    this.currentIpsumUser = u
  }

  private _setQueryLoading(b: boolean): void {this.authQueryLoading = b} 

  public getUserOrgsFromEmail(email: string): Promise<UserTenantOrgsResponse> {

    return new Promise<UserTenantOrgsResponse>( async(resolve, reject) => {
      try {
        this._setQueryLoading(true)
        const userSnap = await firestore.collection(COLLECTIONS.IPSUM_USERS)
          .where('email', '==', email)
          .limit(1)
          .get()

        const user = userSnap.empty ? undefined : userSnap.docs[0].data() as IpsumUser 

        const adminOrgsSnap = await firestore.collection(COLLECTIONS.TENANT_ORGS)
          .where('adminEmail', '==', email)
          .get()

          // fill transient Data
          // and response data
        const orgRefs: TenantOrgRef[] = []
        adminOrgsSnap.forEach((doc) => {
          const org = doc.data() as TenantOrg 
          orgRefs.push({
            tenantId: org.tenantId,
            fullOrgName: org.details.fullOrgName,
            isAdmin: true
          })
        })

        const memberOrgsSnap = await firestore.collection(COLLECTIONS.TENANT_ORGS)
          .where('users', 'array-contains', email)
          .get()

          // fill transient Data
          // and response data
        memberOrgsSnap.forEach((doc) => {
          const org = doc.data() as TenantOrg 
          orgRefs.push({
            tenantId: org.tenantId,
            fullOrgName: org.details.fullOrgName,
            isAdmin: false
          })
        })

        if (user) {
          user!.orgs = orgRefs
        }

        const result: UserTenantOrgsResponse = {
          ipsumUser: user,
          tenantOrgs: orgRefs,
        }
          // edge case, calling code could pretend there is no user
        if (user && orgRefs.length === 0) {
          result.message = 'A User exists, but is not associated with any organizations.'
        }
        else if (!user && orgRefs.length > 0) {
          result.message = `No User exists yet, but ${email} is associated with organizations.`
        }
        resolve(result)
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
    })
  }
 
  public createUser({
    firstName,
    lastName,
    email,
    password
  }: CreateUserParams): Promise<StatusResponse> {

    return new Promise<StatusResponse>( async(resolve, reject) => {
      try {
        this._setQueryLoading(true)
        const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password)
        const uid = userCredential.user!.uid
        await firestore
          .collection(COLLECTIONS.IPSUM_USERS)
          .doc(uid)
          .set({ 
            uid, 
            email,
            firstName,
            lastName 
          })

        resolve({
          status: `Org ${email} created successfully.`
        })
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
    })
  }
 
  public createTenantOrg(params: TenantOrgParams): Promise<StatusResponse>  {

    return new Promise<StatusResponse>( async(resolve, reject) => {
      try {
        this._setQueryLoading(false)

        const orgDoc = await firestore
          .collection(COLLECTIONS.TENANT_ORGS)
          .doc(params.name)  
          .get()

        if (orgDoc.exists) {
          throw new Error(`An organization that uses the name ${params.name} already exists. Please try another name.`)
        }

        const tenantOrg: TenantOrg = {
          tenantId: params.name,
          adminEmail: params.adminEmail,
          users: [], 
          details: params.details,
          created: new Date(),
          updated: new Date(),
        }

        await firestore
          .collection(COLLECTIONS.TENANT_ORGS)
          .doc(tenantOrg.tenantId)  
          .set(tenantOrg)
    
        resolve({
          status: `Org ${params.name} created successfully.`
        })
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
    })
  }
 
  public login(email: string, password: string): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      this._setQueryLoading(true)
      firebaseAuth.signInWithEmailAndPassword(email, password)
        .then( async (userCred: firebase.auth.UserCredential) => {
            // No need to track this use here, since we are subscribing to auth changes
            // and will bolt a IpsumUser onto the logged in Firebase User there. 
          //const msg = `User ${userCred.user!.email} successfully logged in.`
          //console.log(msg)
          resolve()
        })
        .catch((e) => {
          let errorMessage = ''
          if (e.code) {
            console.log('LOGIN ERROR: ' + e.code + ' ' + e.message)
            switch (e.code) {
              case 'auth/wrong-password':
              case 'auth/invalid-email':
              case 'auth/user-not-found': 
              {
                errorMessage = 'invalid password or username'
              } 
              break
              default: 
              {
                errorMessage = e.message     
              }
            }
          }
          else {
            errorMessage = errorToString(e)
          }
          reject(errorMessage)
        })
        .finally(() => {
          this._setQueryLoading(false)
        })
    })
  }

  public logout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._setQueryLoading(true)
      firebaseAuth.signOut()
        .then(() => {
          //history.push('/publicSite')
          console.log('LOGGED OUT')
          resolve()
        })
        .catch((e) => {
          reject(errorToString(e))
        })
        .finally(() => {
          this._setQueryLoading(false)
        })
    })
  }

  public requestPasswordUpdate(email: string): Promise<StatusResponse> {

    return new Promise<StatusResponse>((resolve, reject) => {
      this._setQueryLoading(true)
      firebaseAuth.sendPasswordResetEmail(email, {
        url: 'http://localhost:8080/resetPassword',
        handleCodeInApp: true
      })
        .then(() => {
          resolve({ status: 'Password reset email sent' })
        })
        .catch((error) => {
          reject(errorToString(error))
        })
        .finally(() => {
          this._setQueryLoading(false)
        })
    })
  }

  public completePasswordUpdate(oobCode: string, password: string): Promise<void> {

    return new Promise<void>( async (resolve, reject) => {
      try {
        this._setQueryLoading(true)
        await firebaseAuth.checkActionCode(oobCode)
        await firebaseAuth.confirmPasswordReset(oobCode, password)
        await this.logout()
        resolve()
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
    })
  }
 
  private _getIpsumUserTransientData(user: IpsumUser): Promise<IpsumUser> {

    return new Promise<IpsumUser>( async(resolve, reject) => {
      try {
        this._setQueryLoading(true)
        const adminOrgsSnap = await firestore.collection(COLLECTIONS.TENANT_ORGS)
          .where('adminEmail', '==', user.email)
          .get()

        user.orgs = [] 
        adminOrgsSnap.forEach((doc) => {
          const org = doc.data() as TenantOrg 
          user.orgs!.push({
            tenantId: org.tenantId,
            fullOrgName: org.details.fullOrgName,
            isAdmin: true
          })
        })

        const memberOrgsSnap = await firestore.collection(COLLECTIONS.TENANT_ORGS)
          .where('users', 'array-contains', user.email)
          .get()

        memberOrgsSnap.forEach((doc) => {
          const org = doc.data() as TenantOrg 
          user.orgs!.push({
            tenantId: org.tenantId,
            fullOrgName: org.details.fullOrgName,
            isAdmin: false
          })
        })
        resolve(user)
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
      
    })
  }

  private _refreshIpsumUser(): Promise<void> {
    return new Promise<void>( async(resolve, reject) => {
      try {
        if ( !this.currentAuthUser ) {
          reject('No logged in user')  
          return
        }
        this._setQueryLoading(true)
        this._setCurrentIpsumUser(await this._fetchIpsumUser(this.currentAuthUser.uid))
        if (!this.currentIpsumUser) {
          reject('No IpsumUser corresponding to logged in user found.')
          this._setQueryLoading(false)
          return
        }
        resolve()
      }
      catch (e) {
        reject(errorToString(e))
      }
      finally {
        this._setQueryLoading(false)
      }
    })
  }


  private _fetchIpsumUser(uid: string): Promise<IpsumUser | undefined> {

    return new Promise<IpsumUser | undefined>( async (resolve, reject) => {
      try {
        const userDoc = await firestore.collection(COLLECTIONS.IPSUM_USERS)
          .doc(uid)
          .get()
  
        const user = userDoc.exists ? (userDoc.data() as IpsumUser) : undefined
        if (!user) {
          resolve(undefined)
        }
        else {
          const result = await this._getIpsumUserTransientData(user)
          resolve(result)
        }
      } 
      catch (e) {
        reject(errorToString(e))
      }
    })
  }
 
  public isLoading(): boolean {return (this.authQueryLoading || this.authStateLoading)}
  public isPaymintoAdmin(): boolean {
    return !!this.currentAuthUser && adminBouncer.in(this.currentAuthUser!.email!)
  }

  public disposer(): void {
    this.disposers.forEach((d) => {d()})
  }
}
 
export default AuthServiceImpl
