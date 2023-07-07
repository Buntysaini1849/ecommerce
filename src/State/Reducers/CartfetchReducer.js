import { FETCH_CART_SUCCESS,FETCH_CART_ERROR,ADD_TO_CART_ERROR, ADD_TO_CART_SUCCESS } from '../Actions/CartActions';

const initialState = {
  cartItems: [],
  error:null,
  authToken:null,
};

const CartfetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null
      };
    case FETCH_CART_ERROR:
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        error: null,
        authToken: action.payload.authToken,
      };
    default:
      return state;
  }
};



export default CartfetchReducer;
