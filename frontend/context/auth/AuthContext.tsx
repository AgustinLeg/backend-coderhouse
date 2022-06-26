import { createContext, useContext } from "react";
import { IUser, UserData } from "../../interfaces";

interface ContextProps {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginUser(email: string, password: string): Promise<boolean>;
  logoutUser(): void;
  registerUser(user: UserData): Promise<boolean>;
}

export const AuthContext = createContext({} as ContextProps);

export const useAuthContext = () => useContext(AuthContext);
