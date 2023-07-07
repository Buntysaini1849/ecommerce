export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SET_USER = "SET_USER";

export const setUser = (user,authToken) => {
  return {
    type: SET_USER,
    payload: {user,authToken},
  };
};

export const loginSuccess = (user,authToken) => ({
  type: LOGIN_SUCCESS,
  payload: {user,authToken},
});

export const logout = () => ({
  type: LOGOUT,
});
