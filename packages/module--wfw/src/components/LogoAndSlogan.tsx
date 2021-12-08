import React from 'react'

import { makeStyles } from '../style'

import Link from './Link'

const useStyles = makeStyles()((theme) => ({
  slogan: {
    marginBottom: theme.spacing(2),
  },
  logoLink: {
    textDecoration: 'none',
    display: 'block',
  },
}))

const LogoAndSlogan: React.FC<{
  Logo: React.ComponentType<any>
  logoLink: string
  logoProps?: any
  slogan?: string
}> = ({
  Logo,
  logoLink,
  logoProps,
  slogan
}) => {
  const { classes: s } = useStyles()

  return (
    <>
    <Link to={logoLink} className={s.logoLink}>
      <Logo {...(logoProps ? logoProps : {})}/>
    </Link>
    {slogan && (
    <p className={s.slogan}>
      {slogan}
    </p>
    )}
    </>
  )
}

export default LogoAndSlogan
