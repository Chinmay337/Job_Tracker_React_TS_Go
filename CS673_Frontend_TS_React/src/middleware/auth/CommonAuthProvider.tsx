import React from 'react';
import { GetTokenSilentlyOptions } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

type AuthProviderProps = { children: React.ReactNode }

const AuthContext = React.createContext<{
  isAuthenticated: boolean,
  isLoading: boolean,
  getAccessTokenSilently?: (opts?: GetTokenSilentlyOptions) => Promise<string>
}>({
  isAuthenticated: false,
  isLoading: true,
});

export const CommonAuthProvider = ({ children }: AuthProviderProps) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const value = {  isLoading, isAuthenticated, getAccessTokenSilently };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a CommonAuthProvider');
  }
  return context;
};
