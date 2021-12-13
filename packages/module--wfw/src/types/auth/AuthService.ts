import type StatusResult from '../StatusResult'
import type BaseUser from './BaseUser'

interface AuthService {

  currentUser: BaseUser | undefined
  authStateLoading: boolean     // currentAuthUser status is loading
  isLoading(): boolean          // (authStateLoading || any other queries subclasses might do are loading)

  createUser(
    firstName: string, 
    lastName: string,
    email: string,
    password: string,
    ...args: any[]
  ): Promise<StatusResult>

  requestPasswordReset(email: string): Promise<StatusResult>
  resetPassword(oobCode: string, password: string): Promise<StatusResult>

  login(email: string, password: string): Promise<StatusResult>
  logout(): Promise<void>
}

export default AuthService
