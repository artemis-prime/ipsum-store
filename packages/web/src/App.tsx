import React, { useState } from 'react'
import cx from 'classnames'

import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import {
  Container, 
  CssBaseline, 
  makeStyles, 
  MuiThemeProvider 
} from '@material-ui/core'

// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import type {
  BoundingRect, 
  ChangeHandler, 
  NavElement 
} from '~/types/app'

import {
  AppBar, 
  Footer, 
  //MegaMenuView, 
  //MobileMegaMenu 
} from '~/components'

import Routes, { isFullscreenRoute } from './Routes'
import { AuthServiceProvider } from '~/domain/auth'
import { TenantOrgStateProvider } from '~/domain/tenantOrg'

import theme from './style/muiTheme'
import './style/main.scss'

import styles from './style/mainLayout.style.js'
const useStyles = makeStyles(styles as any)

const PageLayout: React.FC<{}> = ({ children }) => {

  const location = useLocation()
  const [desktopMenuRect, setDesktopMenuRect] = useState<BoundingRect>({ x: -1, y: -1, width: -1, height: -1 })

  const s = useStyles()

  const toolbarResizeListener = (rect: BoundingRect) => {
    setDesktopMenuRect({ x: rect.x, y: rect.height, width: rect.width, height: -1 /* ignore */ })
  }

  const openMobileMenu = () => { /* no op */ }

  const displayMegaMenu: ChangeHandler<NavElement> = (el) => { /* no op */ }

  const onToolbarClick = (e) => {
    e.stopPropagation()
  }

  const isMegaMenuElement = (el: NavElement): boolean => ( false )

  const fullScreenClass = isFullscreenRoute(location.pathname) ? 'fullScreenContainer' : ''
  // see style/scss-partial/_appBarAndMenu.scss
  //const menuClass = megaMenuElement !== undefined ? 'mega-menu-open' : 'mega-menu-not-open'

  return (
    <div className={cx('sass-root', s.outermost, fullScreenClass, routeClass(location.pathname))}>
      <AppBar
        openMobileMenu={openMobileMenu}
        displayMegaMenu={displayMegaMenu}
        isMegaMenuElement={isMegaMenuElement}
        className={s.appBar}
        onToolbarClick={onToolbarClick}
        toolbarResizeListener={toolbarResizeListener}
      />
      <Container component='main' className={s.main}>
        {children}
      </Container>
      <Footer className={s.footer} />
    </div>
  )
}

const App: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AuthServiceProvider>
    <Router>
      <TenantOrgStateProvider>
        <PageLayout>
          <Routes />
        </PageLayout>
      </TenantOrgStateProvider>
    </Router>
    </AuthServiceProvider>
  </MuiThemeProvider>
)

// 'main' container will always have a class built from the main part of the route.
// This allows for any special case styling touch ups.
const routeClass = (path) => {
  const pathArray = path.split('/')
  return pathArray.length > 1 ? `on-route-${pathArray[1]}` : 'main-route'
}

export default App

