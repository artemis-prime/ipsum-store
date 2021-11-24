import type TenantOrgRef from "./TenantOrgRef";

  // This is supplimental to Firebase's User
interface IpsumUser {
  uid: string   
  email: string
  firstName: string
  lastName: string

  orgs?: TenantOrgRef[]  // transient (for convenience)
  ext?: any
}

export default IpsumUser