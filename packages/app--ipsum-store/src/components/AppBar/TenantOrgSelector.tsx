import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import type { NavElement } from '@artemis-prime/wfw/types'
import { ButtonMenu, NavElementMenu } from '@artemis-prime/wfw/components'

import { useAuthService } from '~/domain/auth'

import './tenantOrgSelector.scss'

const TenantOrgSelector: React.FC<{
  className?: string
}> = observer(({
  className
}) => {

  const auth = useAuthService()

  const orgsRef = useRef<NavElement[]>([]) 
  const userIdRef = useRef<string | undefined>(undefined) // uid of FB user 

  useEffect(() => {
      // if loading, wait til a variable changes. Gotta love useEffect()
    if (!auth.authQueryLoading) {
      if (auth.currentIpsumUser) {
        if (userIdRef.current !== auth.currentIpsumUser.uid) {
          userIdRef.current = auth.currentIpsumUser.uid
          auth.setTenantOrgName(auth.currentIpsumUser.orgs![0].tenantId)
            // Create NavElement's that just set the orgName
          orgsRef.current = auth.currentIpsumUser.orgs!.map((org) => ({
            title: org.tenantId,
            handler: () => {
              if (auth.tenantOrgName != org.tenantId) {
                auth.setTenantOrgName(org.tenantId)
              }
            }
          }))
        }
      }
        // This shouldn't really happen if the widget is shown only when a user 
        // is logged in, but for resiliency we include it.
      else {
        userIdRef.current = undefined
        orgsRef.current = []
      }
    }
  }, [auth.authQueryLoading, auth.currentIpsumUser])

  return (
    <div className={cx('tenant-org-selector-outer', className ? className : '')}>
      <ButtonMenu
        id='org-menu-button'
        text={!orgsRef.current ? 'loading...' : auth.tenantOrgName}
        icon={<ArrowDropDownIcon />} 
      >
        <NavElementMenu elements={orgsRef.current} />
      </ButtonMenu>
    </div>
  )
})

export default TenantOrgSelector
