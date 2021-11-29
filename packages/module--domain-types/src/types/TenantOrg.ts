import type Address from './Address'

export default interface TenantOrg { 

  tenantId: string        // eg, 'fifth' camelCase, no spaces.  see 'fullOrgName' below
  adminEmail: string  // admin@fifthmedia.org
  users?: string[]    // [user1@fifthmedia.org, user2@fifthmedia.org]
  details: {
    fullOrgName: string
    contactEmail: string
    contactPhone?: string
    address?: Address
    website?: string
  }
  created?: Date
  updated?: Date
  ext?: any           
}