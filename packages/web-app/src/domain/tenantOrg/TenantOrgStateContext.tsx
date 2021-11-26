import React, {
 useContext, 
 useEffect, 
 useRef 
} from 'react'

import type TenantOrgState from './TenantOrgState'
import TenantOrgStateImpl from './TenantOrgStateImpl'

const TenantOrgStateContext = React.createContext<TenantOrgState | undefined>(undefined) 

export const useTenantOrgState = (): TenantOrgState =>  {
  return useContext(TenantOrgStateContext) as TenantOrgState
}

export const TenantOrgStateProvider: React.FC<{}> = ({ children }) => {
  
  const serviceRef = useRef<TenantOrgStateImpl>(new TenantOrgStateImpl())

  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
        // Anything in here is fired on component unmount.
        serviceRef.current.disposer()
    }
  }, [])
  
  return (
    <TenantOrgStateContext.Provider value={serviceRef.current}>
      {children}
    </TenantOrgStateContext.Provider>
  )
}
