import React, { FC, useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { IUser, UserData } from "../interfaces";
import Cookies from "js-cookie";
import shopApi from "../api";

export interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const INITIAL_AUTH_STATE = {
  user: null,
  isAuthenticated: false,
};

interface Props {
  children: any;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await shopApi.post("/auth/login", {
        email,
        password,
      });

      if (!response) {
        return false;
      }

      const { token, user } = response.data;

      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logoutUser = () => {
    Cookies.remove("token", { path: "" });
    dispatch({ type: "[Auth] - Logout" });
  };

  const registerUser = async (user: UserData) => {
    const { name, lastName, email, password } = user;
    try {
      const response = await shopApi.post("/auth/register", {
        name,
        lastName,
        email,
        password,
      });

      const { token, user } = response.data;

      if (!response) return false;
      Cookies.set("token", token);
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
