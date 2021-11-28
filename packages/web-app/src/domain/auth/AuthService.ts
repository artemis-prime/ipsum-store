
import type { CoreAuthService } from '@artemis-prime/wfw/auth'

import type { 
  IpsumUser,
  StatusResponse,
  TenantOrgParams,
  UserTenantOrgsResponse
} from '@ipsum-labs/dash-types'

interface AuthService extends CoreAuthService {

  currentIpsumUser: IpsumUser | undefined
  authQueryLoading: boolean     // any other query: currentIpsumUser, tenantOrgs, etc
  
  isPaymintoAdmin(): boolean

  getUserOrgsFromEmail(email: string): Promise<UserTenantOrgsResponse>
  createTenantOrg(params: TenantOrgParams): Promise<StatusResponse>
}

export default AuthService
