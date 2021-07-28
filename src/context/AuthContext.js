import React from "react";

export const AuthContext = React.createContext({
  authenticated: false,
});

export const AuthContextProvider = AuthContext.Provider;
