import { createContext, useContext } from 'react';

const AuthContext = createContext({
  email: '',
  isUserLoggedIn: '',
});

AuthContext.displayName = 'Auth';

export default function AuthProvider(props) {
  const ctx = {
    email: 'James@',
    isUserLoggedIn: '',
  };
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

// const ctx = useContext(AuthContext);

export function useAuth() {
  return useContext(AuthContext);
}
