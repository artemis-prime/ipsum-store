
import type { CoreAuthService } from '@artemis-prime/wfw/auth'

import type { 
  IpsumUser,
  StatusResponse,
  TenantOrg,
  TenantOrgParams,
  UserTenantOrgsResponse
} from '@ipsum-labs/domain-types'

interface AuthService extends CoreAuthService {

  currentIpsumUser: IpsumUser | undefined
  authQueryLoading: boolean     // any other query: currentIpsumUser, tenantOrgs, etc
  
  isPaymintoAdmin(): boolean

  getUserOrgsFromEmail(email: string): Promise<UserTenantOrgsResponse>
  createTenantOrg(params: TenantOrgParams): Promise<StatusResponse>

  tenantOrgName: string 
  setTenantOrgName(n: string): void
  tenantOrg: TenantOrg | undefined
  tenantOrgLoading: boolean
  tenantOrgErrorString: string

}

export default AuthService
