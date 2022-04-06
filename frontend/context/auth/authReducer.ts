import { IUser } from "../../interfaces";
import { AuthState } from "./AuthProvider";

export type AuthType = {
  type: "[AUTH] Login";
  payload: IUser;
};

export const authReducer = (state: AuthState, action: AuthType): AuthState => {
  switch (action.type) {
    case "[AUTH] Login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
