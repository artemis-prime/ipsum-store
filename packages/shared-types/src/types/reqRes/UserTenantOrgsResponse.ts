import type IpsumUser from '../IpsumUser'
import type TenantOrgRef from '../TenantOrgRef'

export default interface UserTenantOrgsResponse {
  ipsumUser: IpsumUser | undefined
  tenantOrgs: TenantOrgRef[]
  message?: string 
}