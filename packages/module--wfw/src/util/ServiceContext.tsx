import React, {
  useContext, 
  useEffect, 
  useRef 
 } from 'react'
 
import type AuthService from './AuthService'
import AuthServiceImpl from './AuthServiceImpl'

const AuthServiceContext = React.createContext<AuthService | undefined>(undefined) 

export const useAuthService = (): AuthService =>  {
  return useContext(AuthServiceContext) as AuthService
}

export const AuthServiceProvider: React.FC<{}> = ({ children }) => {
  
  const serviceRef = useRef<AuthServiceImpl>(new AuthServiceImpl())

  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
        // Anything in here is fired on component unmount.
        serviceRef.current.disposer()
    }
  }, [])
  
  return (
    <AuthServiceContext.Provider value={serviceRef.current}>
      {children}
    </AuthServiceContext.Provider>
  )
}
