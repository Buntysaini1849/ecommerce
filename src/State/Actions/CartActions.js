

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
export const SET_CART_COUNT  = 'SET_CART_COUNT';


export const fetchCartSuccess = (auth) => ({
  type: FETCH_CART_SUCCESS,
  payload: auth,
});

export const fetchCartFailure = (error) => ({
  type: FETCH_CART_ERROR,
  payload: error,
});

// actions.js
export const updateCartCount = (count) => ({
  type: SET_CART_COUNT,
  payload: count,
});







