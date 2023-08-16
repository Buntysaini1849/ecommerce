

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';



export const fetchCartSuccess = (auth) => ({
  type: FETCH_CART_SUCCESS,
  payload: auth,
});

export const fetchCartFailure = (error) => ({
  type: FETCH_CART_ERROR,
  payload: error,
});







