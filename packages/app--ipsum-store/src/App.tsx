import React, { useState } from 'react'
import cx from 'classnames'

import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { ThemeProvider } from "@mui/material/styles"

import { Container, CssBaseline } from '@mui/material'

import type {
  BoundingRect, 
  ChangeHandler, 
  NavElement 
} from '@artemis-prime/wfw/types'

import { makeStyles } from '@artemis-prime/wfw/style'

import {
  AppBar, 
  //Footer, 
  //MegaMenuView, 
  //MobileMegaMenu 
} from '~/components'

import Routes, { isFullscreenRoute } from './Routes'
import { AuthServiceProvider } from '~/domain/auth'

import ThreadService, { ThreadServiceContext } from '~/domain/thread/ThreadService'

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
})

import theme from './style/muiTheme'
import './style/main.scss'

import messages from '~/domain/thread/threadFixture'
const threadService = new ThreadService(messages)

import styles from './style/mainLayout.style.js'
const useStyles = makeStyles()(styles as any)

const PageLayout: React.FC<{}> = ({ children }) => {

  const location = useLocation()
  const [desktopMenuRect, setDesktopMenuRect] = useState<BoundingRect>({ x: -1, y: -1, width: -1, height: -1 })

  const { classes: s } = useStyles()

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
    </div>
  )
}

//       <Footer className={s.footer} />

const App: React.FC<{}> = () => (
  <CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthServiceProvider>
      <ThreadServiceContext.Provider value={threadService} > 
      <Router>
        <PageLayout>
          <Routes />
        </PageLayout>
      </Router>
      </ThreadServiceContext.Provider>
      </AuthServiceProvider>
    </ThemeProvider>
  </CacheProvider>
)

// 'main' container will always have a class built from the main part of the route.
// This allows for any special case styling touch ups.
const routeClass = (path) => {
  const pathArray = path.split('/')
  return pathArray.length > 1 ? `on-route-${pathArray[1]}` : 'main-route'
}

export default App
