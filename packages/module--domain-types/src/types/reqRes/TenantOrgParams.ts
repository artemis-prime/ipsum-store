import type Address from '../Address'

export default interface TenantOrgParams 
{
  name: string
  adminEmail: string
  users: string[] // pass empty if desired

  details: {
    fullOrgName: string
    contactEmail: string
    contactPhone?: string
    address?: Address
    website?: string
  }

  ext?: any
}
