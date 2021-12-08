import React from 'react'
import cx from 'classnames'

import { IconButton } from '@mui/material'

import { makeStyles } from '../style'

import type { NavElement } from '../types'
import { toKebabCase } from '../util'

const useStyles = makeStyles()((theme) => ({

  socialIconRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(3),
    },
  },

  socialIcon: {
    color: theme.palette.text.secondary,
    display: 'block',
    padding: 0,
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  }
}))

const SocialIcons: React.FC<{
  links: NavElement[]
  className?: string
}> = ({
  links,
  className
}) => {
  
  const { classes: s } = useStyles()
  return (
    <div className={cx(s.socialIconRow, className ? className : '')}>
      {links.map((navElement: NavElement) => (
        <IconButton
          href={navElement.to!}
          key={toKebabCase(navElement.title!)}
          className={s.socialIcon}
          target='_blank'
          size="large"
        >
          {navElement.uiElement!}
        </IconButton>
      ))}
    </div>
  )
}
export default SocialIcons
