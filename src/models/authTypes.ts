import { IUser } from "./IUser";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  user: IUser | null;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: IUser;
  };
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthActionTypes = LoginSuccessAction | LogoutSuccessAction;
