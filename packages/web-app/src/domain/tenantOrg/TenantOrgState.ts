import type { TenantOrg } from '@ipsum-labs/dash-types'

export default interface TenantOrgState {

  tenantOrgName: string 
  setTenantOrgName(n: string): void
  tenantOrg: TenantOrg | undefined
  tenantOrgLoading: boolean
  tenantOrgErrorString: string
}

