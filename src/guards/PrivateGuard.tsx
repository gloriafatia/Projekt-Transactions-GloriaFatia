import { FunctionComponent, ReactNode } from 'react'
import { Navigate, useLocation} from 'react-router-dom'

import useAuth from '../hooks/useAuth'

interface PrivateGuardProps {
  children: ReactNode
}

const PrivateGuard: FunctionComponent<PrivateGuardProps> = ({ children }) => {
  const location = useLocation();

  const  {isAuthenticated}: any  = useAuth();

  return (
    isAuthenticated?.users
    ?<>{children}</>
    : <Navigate to="/LoginPage" state={{from: location}} replace />

  );

  
}

export default PrivateGuard