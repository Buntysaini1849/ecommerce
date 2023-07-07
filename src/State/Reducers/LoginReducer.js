import { LOGIN_SUCCESS, LOGOUT } from "../Actions/LoginAction";

const initialState = {
  user: null,
  isAuthenticated: false,
  authToken:null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isAuthenticated: true,
        authToken: action.payload.authToken,
      };
    case LOGOUT:
      return {
        ...state,
        users: null,
        isAuthenticated: false,
        authToken:null,
      };
    default:
      return state;
  }
};

export default LoginReducer;
