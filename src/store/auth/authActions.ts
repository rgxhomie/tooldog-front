import { Dispatch } from 'redux';
import { AuthActionTypes, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../../models/authTypes';
import AuthService from '../../services/AuthService';

export const login = (email: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    const response = await AuthService.login(email, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Handle login failure
  }
};

export const logout = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    await AuthService.logout();
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    // Handle logout failure
  }
};
