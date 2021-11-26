import React from 'react'
import { observer } from 'mobx-react'
import cx from 'classnames'

import {
  Container,
  Grid,
  IconButton,
  makeStyles
} from '@material-ui/core'

import { useAuthService } from '~/domain/auth'

import type { NavElement, SimpleHandler } from '~/types/app'
import { mapNavElementHandler } from '~/util'
import { toKebabCase } from '@ipsum-labs/dash-util' 

import { Link, IpsumLogo } from '~/components'

import _str from '~/settings/strings'
import { 
  SOCIAL_LINKS, 
  SLOGAN, 
} from '~/settings/app/footerElements'

import FinePrintContent from './finePrint'

import styles from './footerLayout.style.js'
const useStyles = makeStyles(styles as any)

const Footer: React.FC<{
  className: string
}> = observer(({ 
  className 
}) => {

  const s = useStyles()
  const auth = useAuthService()
  const currentYear = new Date().getFullYear()
  const handlers = new Map<string, SimpleHandler>()
  handlers.set('logout', auth.logout.bind(auth))


  const GUEST: NavElement[] = [
    {
      title: 'Log in',
      to: '/login',
    },
    {
      title: 'Sign Up',
      to: '/signup',
    },
  ]

  const LOGGEDIN: NavElement[] = [
    {
      title: 'My Account',
      to: '/account',
    },
    {
      title: 'Log Out',
      namedHandler: 'logout',
    },
  ]

  const horizSections: NavElement = {
    title: 'ignore',
    subElements: [
      { title: 'Payments', to: '/payments' },
      { title: 'API Keys', to: '/apiKeys' }, 
      ...((!!auth.currentFirebaseUser) ? LOGGEDIN : GUEST)
    ],
  }


  const FooterNav: React.FC<{}> = () => {

    return (
    <ul className={s.horizFooter}>
    {horizSections.subElements && horizSections.subElements.map((item) => {
      const handler = mapNavElementHandler(item, handlers)
      let props: any = {}
      if ('to' in item) {
        props.to = item.to  
      }
      if (handler) {
        props.onClick = handler
      }
      props.external = !!item.external 
      return (
        <li key={toKebabCase(item.title!)}>
          <Link {...props} className={cx(s.footerNavLink, 'textColorPrimary')}>
            { /* don't display any icons, even if present */}
            {item.title}
          </Link>
        </li>
      )
    })}
    </ul>
    )
  }

  const SocialIcons = () => (
    <div className={s.socialIconRow}>
      {SOCIAL_LINKS.map((navElement: NavElement) => (
        <IconButton href={navElement.to as string} key={toKebabCase(navElement.title!)} className={s.socialIcon} target='_blank'>
          {navElement.uiElement as JSX.Element}
        </IconButton>
      ))}
    </div>
  )
  
  const Copyright = () => (
    <div className={s.copyrightOuter}>
      <p className='body2 textSecondary'>
        <Link to='/privacy'>Privacy Policy</Link> / <Link to='/terms'>Terms of Use</Link>
      </p>
      <p className='body2 textSecondary'>
        {`© 2020-${currentYear} ${_str('appTitleLegal')}. ${_str('allRights')}.`}
      </p>
    </div>
  )

  const LogoAndByline = () => (
    <>
    <Link to='/' className={s.logoLink}>
      <IpsumLogo size='small'/>
    </Link>
    <p className={cx(s.byline, 'textColorPrimary')}>
      {SLOGAN}
    </p>
    </>
  )

  return (
    <Container component='footer' maxWidth={false} className={className}>
      <div className={'footer-inner'} >
        <Grid container className={s.footerGridContainer}>
          <Grid item xs={12} lg={3} className={s.logoAreaGridItem}>
            <LogoAndByline />
          </Grid>
          <Grid item xs={12} lg={9} className={s.navGridItem}>
            <FooterNav />
            <Copyright />
          </Grid>
        </Grid>
        <div className='fine-print'>
          <FinePrintContent />
        </div>
      </div>
    </Container>
  )
})

export default Footer

  /*
  const navSections: NavElement[] = [
    ...MAIN,
    {
      title: 'Account',
      subElements: (!!currentFirebaseUser) ? LOGGEDIN : GUEST
    }
  ]
  */


/*
  const FooterNav_ = (): JSX.Element => (
    <Grid container className={classNames(s.navGridContainer, 'footer-nav')}>
      {navSections.map((section) => (
        <Grid item xs={6} md={3} key={toKebabCase(section.title)} className={s.navSectionGridItem} >
          <h6 className={classNames(s.navSectionTitle, 'textColorPrimary')} >{section.title}</h6>
          <hr className={s.navSectionHR} />
          <ul>
          {section.subElements && section.subElements.map((item) => {
            const handler = mapNavElementHandler(item, handlers)
            let props: any = {}
            if ('to' in item) {
              props.to = item.to  
            }
            if (handler) {
              props.onClick = handler
            }
            props.external = !!item.external 
            return (
              <li key={toKebabCase(item.title)}>
                <Link {...props} className={classNames(s.footerNavLink, 'textColorPrimary')}>
                  { // don't display any icons, even if present //}
                  {item.title}
                </Link>
              </li>
            )
          })}
          </ul>
        </Grid>
      ))}
    </Grid>
  )
*/