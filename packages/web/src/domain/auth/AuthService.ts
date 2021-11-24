
import type firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import type { 
  CreateUserParams,
  IpsumUser,
  StatusResponse,
  TenantOrgParams,
  UserTenantOrgsResponse
} from '@ipsum-labs/dash-types'

interface AuthService {

  currentFirebaseUser: firebase.User | undefined
  currentIpsumUser: IpsumUser | undefined
  authStateLoading: boolean     // firebaseUser status is loading
  authQueryLoading: boolean     // any other query: currentIpsumUser, tenantOrgs, etc
  isLoading(): boolean          // (authStateLoading || authQueryLoading)

  isPaymintoAdmin(): boolean

  getUserOrgsFromEmail(email: string): Promise<UserTenantOrgsResponse>
  createUser(params: CreateUserParams): Promise<StatusResponse>
  createTenantOrg(params: TenantOrgParams): Promise<StatusResponse>

  requestPasswordUpdate(email: string): Promise<StatusResponse>
  completePasswordUpdate(oobCode: string, password: string): Promise<void>

  login(email: string, password: string): Promise<void>
  logout(): Promise<void>
}

export default AuthService
