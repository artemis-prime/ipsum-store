import React from 'react'
import { observer } from 'mobx-react'
import {
  Route, 
  Switch, 
} from 'react-router-dom'

import {
  CompletePasswordUpdatePage,
  LoginPage,
  SignupPage,
  RequestPasswordUpdatePage,
  ThreadPage,
} from './pages'

import { useAuthService } from '~/domain/auth'

const Routes: React.FC<{}> = () => (
  <Switch>
    <PrivateRoute exact path='/'>
      <ThreadPage />
    </PrivateRoute>
    <PrivateRoute path='/messages'>
      <ThreadPage />
    </PrivateRoute>

    <Route path='/login'>
      <LoginPage />
    </Route>
    <Route path='/signup'>
      <SignupPage />
    </Route>
    <Route path='/requestPasswordUpdate'>
      <RequestPasswordUpdatePage />
    </Route>
    <Route path='/updatePassword'>
      <CompletePasswordUpdatePage />
    </Route>
  </Switch>
)

const PrivateRoute: React.FC<any> = observer(({ children, ...rest }) => {

  const auth = useAuthService()
  return (
    <Route {...rest}>
      {(!!auth.currentFirebaseUser) ? children : <LoginPage/>} 
    </Route>
  )
})

const ExternalRedirect = ({ to, ...routeProps }) => (
  <Route {...routeProps} render={() => {window.location = to; return <></>}} />
)

const FULL_SCREEN_ROUTES: Array<string> = [
  //'/',
]

export const isFullscreenRoute = (pathname: string): boolean =>
  FULL_SCREEN_ROUTES.includes(pathname)

export const TERMS_AND_CONDITIONS_ROUTE = '/' // TODO

export default Routes
