import type TenantRef from './TenantRef'

  // This is supplimental to Firebase's User
interface TenantUser {
  uid: string   
  email: string     // duplicates BaseUser, but 
  firstName: string
  lastName: string

  _orgs?: TenantRef[]  // transient 
}

export default TenantUser