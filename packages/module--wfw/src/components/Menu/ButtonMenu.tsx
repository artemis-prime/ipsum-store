import React from 'react'
import cx from 'classnames'

import { Button, IconButton } from '@mui/material'

import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks'

  // https://www.npmjs.com/package/material-ui-popup-state#using-popover-and-menu-with-bindhover
import Popover from 'material-ui-popup-state/HoverPopover'

import { makeStyles } from '../../style'


import type MenuTriggerProps from './MenuTriggerProps'

const useStyles = makeStyles()((theme: any) => ({
  menuButton: {
    ...theme.ext.menuButton,
    //marginBottom: '5.5px'
  },

  buttonText: {
    ...theme.ext.menuButtonLabel
  },
  menu: {
    zIndex: 10000,
  },
}))

const ButtonMenu: React.FC<MenuTriggerProps> = ({ 
  id,   // must be unique to each Button / Popover combo that uses material-ui-popup-state
  text,
  icon,
  iconIsBefore,
  triggerClass,
  triggerProps,
  menuClass,
  children,
}) => {

  const popupState = usePopupState({
    variant: 'popover',
    popupId: id, 
  })

  const { classes: s } = useStyles()
  const buttonProps = (triggerProps === undefined) ? {} : triggerProps

  if (icon && text) {
    if (iconIsBefore ) {
      buttonProps.startIcon = icon
    }
    else {
      buttonProps.endIcon = icon
    }
  }
  if (!buttonProps.color) {
    buttonProps.color = 'inherit'
  }

  const popoverProps = {
    ...bindPopover(popupState)
  }  

  const buttonClass = cx(
    (triggerClass) ? triggerClass : '', 
    (popoverProps.open) ? 'popover-open' : ''
  )

  return <>
    {(icon && !text) ? (
      <IconButton
        {...buttonProps}
        {...bindHover(popupState)}
        className={cx(s.menuButton, buttonClass)}
        classes={{ label: s.buttonText }}
        size="large">
        {icon}
      </IconButton >
    ) : (
      <Button
        variant={(buttonProps.variant) ? buttonProps.variant : 'text'}
        {...buttonProps}
        {...bindHover(popupState)}
        className={cx(s.menuButton, buttonClass)}
        classes={{ label: s.buttonText }}
      >
        {text}
      </Button >
    )}
    <Popover
      {...popoverProps}
      className={cx(s.menu, (menuClass) ? menuClass : '')}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      {children}
    </Popover>
  </>;
}

export default ButtonMenu
