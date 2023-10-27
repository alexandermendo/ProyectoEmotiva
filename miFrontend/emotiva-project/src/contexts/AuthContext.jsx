import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider ({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Memorizar la función login
  const login = useCallback(function (){
    setIsAuthenticated(true);
  }, []);

  //Memorizar la función logout
  const logout = useCallback(function (){
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => ({    
    isAuthenticated,
    login,
    logout
  }),
  [isAuthenticated, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/*Hook para consumir el contexto*/
// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext () {
  return useContext(AuthContext);
}