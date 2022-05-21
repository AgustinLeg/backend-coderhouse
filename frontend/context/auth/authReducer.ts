import { IUser } from "../../interfaces";
import { AuthState } from "./AuthProvider";

export type AuthType =
  | {
      type: "[Auth] - Login";
      payload: IUser;
    }
  | {
      type: "[Auth] - Logout";
    };

export const authReducer = (state: AuthState, action: AuthType): AuthState => {
  switch (action.type) {
    case "[Auth] - Login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "[Auth] - Logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
