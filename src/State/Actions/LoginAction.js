export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";
export const SET_AUTH = "SET_AUTH";

export const setUser = (user,auth) => {
  return {
    type: SET_USER,
    payload: {user,auth},
  };
};

export const loginSuccess = (user,auth) => ({
  type: LOGIN_SUCCESS,
  payload: {user,auth},
});

export const logout = () => ({
  type: LOGOUT,
});

export const setAuth = (auth) => ({ 
  type:SET_AUTH,
  payload: auth,
});