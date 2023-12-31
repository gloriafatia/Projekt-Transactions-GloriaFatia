import { PropsWithChildren, createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [auth, setAuth] = useState ({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
