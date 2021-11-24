import {
  action,
  makeObservable, 
  observable, 
  reaction, 
} from 'mobx'

import { firestore } from '~/service/firebase'

import type { TenantOrg } from '@ipsum-labs/dash-types'
import { COLLECTIONS } from '@ipsum-labs/dash-types'
import { errorToString, datetimeToDate } from '@ipsum-labs/dash-util'

import type TenantOrgState from './TenantOrgState'

class TenantOrgStateImpl implements TenantOrgState {

  tenantOrgName: string = ''
  tenantOrg: TenantOrg | undefined = undefined
  tenantOrgLoading: boolean = false
  tenantOrgErrorString: string = ''
  disposers: (() => void)[] = []

  constructor() {
    makeObservable(this, {
      tenantOrgName: observable,
      tenantOrgLoading: observable,
      tenantOrgErrorString: observable,
      setTenantOrgName: action,
    })
    this.disposer[0] = reaction( 
      () => (this.tenantOrgName),
      async (name) => {
        if (name) {
          try {
            this.tenantOrgLoading = true
            this.tenantOrg = await this.fetchTenantOrg(name)  
          }
          catch (e) {
            this.tenantOrgErrorString = errorToString(e)
            this.tenantOrg = undefined 
          }
          finally {
            this.tenantOrgLoading = false
          }
        }
        else {
          this.tenantOrg = undefined  
        }
      }
    )
  }

  public setTenantOrgName(n: string): void {
    this.tenantOrgName = n
  }

  private async fetchTenantOrg(name: string): Promise<TenantOrg> {

    return new Promise<TenantOrg>(async (resolve, reject) => {
      try {
        const doc = await firestore
          .collection(COLLECTIONS.TENANT_ORGS)
          .doc(name)
          .get()

        const result = doc.data() as TenantOrg
        if (result.created) {
          result.created = datetimeToDate(result.created!, true)
        }
        if (result.updated) {
          result.updated = datetimeToDate(result.updated!, true)
        }
        resolve(result)
      }
      catch (e) {
        reject(errorToString(e))
      }
    })
  }

  disposer() {
    this.disposers.forEach((d) => {d()})
  }
}

export default TenantOrgStateImpl