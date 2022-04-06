import React, { FC, useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { IUser } from "../../interfaces";

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const INITIAL_AUTH_STATE = {
  user: null,
  isAuthenticated: false,
};
export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);

  const loginUser = (email: string, password: string) => {
    let role = 'USER_ROLE'
    if(email === 'admin@gmail.com') {
      role = 'ADMIN_ROLE'
    }
    
    dispatch({
      type: "[AUTH] Login",
      payload: { email, name: "user", id: email, role },
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
