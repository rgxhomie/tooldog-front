import { AuthActionTypes, AuthState, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../../models/authTypes';

const initialState: AuthState = {
  isLoggedIn: false,
  token: '',
  user: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
