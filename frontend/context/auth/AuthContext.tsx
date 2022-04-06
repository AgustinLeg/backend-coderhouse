import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  user: IUser | null;
  isAuthenticated: boolean;
  loginUser(email: string, password: string): void;
}

export const AuthContext = createContext({} as ContextProps);
