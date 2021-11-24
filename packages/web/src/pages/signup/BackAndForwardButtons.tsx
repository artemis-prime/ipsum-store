import React from 'react'
import cx from 'classnames'

import { Button } from '@material-ui/core'

const BackAndForwardButtons: React.FC<{
  step?: number
  totalSteps?: number
  finalActionName?: string
  disableForward?: boolean
  disableBack?: boolean
  forward?(): void
  back?(): void
}> = ({
  step,
  totalSteps,
  finalActionName,
  disableForward,
  disableBack,
  forward,
  back,
}) => (

  <div className='back-and-forward-buttons'>
    <Button
      variant="text"
      color="primary"
      disabled={!!disableBack}
      onClick={back}
      size='large'
        // Can be used as step wizard or non linear by supplying 
        // back() and forward() functions as needed
      className={cx('form-button', (step === 0 || !!!back) ? 'hidden-button' : '')}
    >
      Back
    </Button>
    <Button
      variant="contained"
      color="primary"
      disabled={!!disableForward}
      onClick={forward}
      size='large'
        // Can be used as step wizard or non linear by supplying 
        // back() and forward() functions as needed
      className={cx('form-button', (!!!forward) ? 'hidden-button' : '')}
    >
    {
      // Can be used as step wizard or non linear by supplying 
      // finalActionName as needed
    ((!!step && !!totalSteps) && (step < totalSteps - 1) || !!!finalActionName) ? 'Continue' : finalActionName}
    </Button>
  </div>
)

export default BackAndForwardButtons
