import React, { FC, useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { IUser, UserData } from "../../interfaces";

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

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      const { token, user, error } = data;

      if (error) return false;
      // Cookies.set('token', token );
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logoutUser = () => {
    dispatch({ type: "[Auth] - Logout" });
  };

  const registerUser = async (user: UserData) => {
    const { name, lastName, email, password } = user;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, lastName, email, password }),
        }
      );

      const data = await response.json();

      const { token, user, error } = data;

      if (error) return false;
      // Cookies.set('token', token );
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...state, loginUser, logoutUser, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
