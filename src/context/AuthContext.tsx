import { createContext, ReactNode, useState } from 'react'


interface AuthContextType {
  isAuthenticated : Boolean;
  login: () => void;
  logout: () => void;
}

export interface AuthProps {
  children : ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider= ({children} : AuthProps) =>{
  const[isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const login =() => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>{children}</AuthContext.Provider>
  );

}

export default AuthContext