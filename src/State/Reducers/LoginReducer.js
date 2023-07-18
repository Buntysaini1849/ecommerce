import { LOGIN_SUCCESS, LOGOUT, SET_AUTH } from "../Actions/LoginAction";

const initialState = {
  user: null,
  isAuthenticated: false,
  auth:'',

};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isAuthenticated: true,
        isLoggedin:true,
        auth: action.payload,
      };
      case SET_AUTH:
      return {
        ...state,
        
        auth: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        users: null,
        isAuthenticated: false,
        auth:null,
      };
    default:
      return state;
  }
};

export default LoginReducer;
