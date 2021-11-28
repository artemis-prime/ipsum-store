import React from 'react'
import { observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'

import {
  ResetPasswordPage,
  LoginPage,
  RequestPasswordResetPage,
} from '@artemis-prime/wfw/pages'

import {
  SignupPage,
  ThreadPage,
} from './pages'

import { useAuthService } from '~/domain/auth'

const Routes: React.FC<{}> = () => {
 
  const auth = useAuthService()
  
  return (
    <Switch>
      <PrivateRoute exact path='/'>
        <ThreadPage />
      </PrivateRoute>
      <PrivateRoute path='/messages'>
        <ThreadPage />
      </PrivateRoute>

      <Route path='/login'>
        <LoginPage auth={auth} />
      </Route>
      <Route path='/signup'>
        <SignupPage />
      </Route>
      <Route path='/requestPasswordReset'>
        <RequestPasswordResetPage auth={auth} />
      </Route>
      <Route path='/resetPassword'>
        <ResetPasswordPage auth={auth} />
      </Route>
    </Switch>
  )
}
const PrivateRoute: React.FC<any> = observer(({ children, ...rest }) => {

  const auth = useAuthService()
  return (
    <Route {...rest}>
      {(!!auth.currentAuthUser) ? children : <LoginPage auth={auth} />} 
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
