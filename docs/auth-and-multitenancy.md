# Authenication and Multitenancy

### 'Core' Auth 
* User Auth only concerns the ability to access an individual ***web app***, not make calls to a REST API.  That is a separate kind of auth and does not involve or imply the notion of a `User`
* The web framework has an interface called `CoreAuthService` that implements this basic web auth, and handles boilerplate tasks like login and password reset. `CoreUser` is the base interface, and only includes `email` and `displayName`.  This allows any implementation to use Firebase, Azure, or any similar service.

### Domain User 
* In practice, most app will need a ***domain user***, which reflects domain specific relationships and data. It is easiest to think of this as an extension, or even a subclass of the Core User which implements extra functionality. Many third-party auth systems are not extensible (cf: `Firebase`). So it it easiest to key these two off the ***same `uid`***.  

```
async createUser(
    firstName,
    lastName,
    email,
    password,
    // other domain specific stuff
) {

  const userCredential = await firebaseAuth.
    createUserWithEmailAndPassword(email, password)
  const uid = userCredential.user!.uid
  await firestore
    .collection(COLLECTIONS.DOMAIN_USERS)
    .doc(uid)
    .set({ 
      uid, 
      email,
      firstName,
      lastName,
      // other stuff 
    })
}
```

* furthermore, the two should be kept in sync automatically and made available via subclass of the `CoreAuthService` interface:

```
firebaseAuth.onAuthStateChanged( 
  async (fbUser: firebase.User | null) => {

    if (!fbUser) {
      console.log('LOGGED OUT')
      setCurrentCoreUser(undefined)
      setCurrentDomainUser(undefined)
    }
    else {
      setCurrentCoreUser(fbUser)
      if (!currentDomainUser || currentDomainUser.uid !== fbUser.uid) {
        setCurrentDomainUser(await fetchDomainUser(fbUser.uid))
      }
    }
  }
)

interface AuthService extends CoreAuthService {

  currentDomainUser: DomainUser | undefined
  // ...
}

```

### Multi-tenancy
Multi-tenancy is a common requirement and so is illustrated here, even though it is not essential to the core functionality of a store / messaging system.

It is often desirable to have a individual users associated with one or more "Tenant Orgs" within which they may have domain-specific permissions. For example, "Owner", "Billing Admin", "Editor", "Viewer". Think of GitHub and it's org / user model.

* The architecture implemented here does not allow of "unaffiliated" users, but could if that was desirable.  
* Rather, when a user signs up, they are asked for the org information and org is created for them.  This is a common pattern when there is a "free" and "paid" tier.
* `IpsumUser` This contains a list of `TenantOrg`'s.  Since this is a one-to-many relationship, the app allow a way for the user to decide what Org they are logged in as.   


* Once created, a `TenantOrg` record whitelists `User`s email addresses. Without being specified in that record, a user cannot create an account on the system affiliated with that Org.
* Once invitations are supported, if a potential `User` clicks on a reply link in an invite email, the `tenantID` field will already be filled in and offered for reference in a read-only manner.

#### Messaging / Shopping within an Org
* In our sample app, one can only see "Ipsums" (random objects) and messages from users that share a tenant org. 