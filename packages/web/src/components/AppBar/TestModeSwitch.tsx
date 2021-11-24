import React from 'react'
import { observer } from 'mobx-react'

import { makeStyles } from '@material-ui/core'

import { BinarySwitch } from '~/components'
import { useTenantOrgState } from '~/domain/tenantOrg'

const useStyles = makeStyles((theme: any) => ({

  testModeSmallLabel: {
    color: theme.palette.secondary.main,
    fontWeight: 700
  },

  nonTestModeSmallLabel: {
    fontWeight: 700
  },
}))

const TestModeSwitch: React.FC<{}> = observer(({}) => {

  const tenantOrgState = useTenantOrgState()
  const s = useStyles()

  return (
    <BinarySwitch
      name='testMode'
      ariaLabel='Test Mode switch'
      leftLabel='Production'
      rightLabel='Test'
      muiColor='secondary'
      disabled={tenantOrgState.tenantOrgLoading || tenantOrgState.tenantOrg?.testOnly }
      isRight={(!tenantOrgState.tenantOrgLoading && tenantOrgState.tenantOrg?.testOnly) || tenantOrgState.testMode}
      setRight={tenantOrgState.setTestMode.bind(tenantOrgState)}
      leftClass={s.nonTestModeSmallLabel}
      rightClass={s.testModeSmallLabel}
    />
  )
})

export default TestModeSwitch

