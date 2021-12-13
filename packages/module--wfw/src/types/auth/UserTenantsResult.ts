import type TenantUser from './TenantUser'
import type TenantRef from './TenantRef'

export default interface UserTenantsResult {
  ipsumUser: TenantUser | undefined
  tenantOrgs: TenantRef[]
  message?: string 
}