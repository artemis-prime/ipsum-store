import type { TenantOrg } from '@ipsum-labs/dash-types'

export default interface TenantOrgState {

  tenantOrgOrgName: string 
  setTenantOrgName(n: string): void
  tenantOrg: TenantOrg | undefined
  tenantOrgLoading: boolean
  tenantOrgErrorString: string
}

