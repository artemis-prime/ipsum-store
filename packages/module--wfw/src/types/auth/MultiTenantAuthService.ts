
import type AuthService from './AuthService'
import type TenantUser from './TenantUser'
import type StatusResult from '../StatusResult'
import type TenantOrg from './TenantOrg'
import type TenantParams from './TenantParams'
import type UserTenantsResult from './UserTenantsResult'

interface MultiTenantAuthService extends AuthService {

  currentTenantUser: TenantUser | undefined
  tenantUserLoading: boolean     // any other query: currentTenantUser, tenantOrgs, etc
  
  isAppAdmin(): boolean

  getTenantsFromEmail(email: string): Promise<UserTenantsResult>
  createTenant(params: TenantParams): Promise<StatusResult>

  setTenant(name: string): void

  tenantName: string 
  tenant: TenantOrg | undefined
  tenantLoading: boolean
  tenantErrorString: string
}

export default MultiTenantAuthService
