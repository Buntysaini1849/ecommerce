import { FETCH_CART_SUCCESS,FETCH_CART_ERROR } from '../Actions/CartActions';

const initialState = {
  product: [],
  error:null,
  auth:'',
};

const CartfetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
        auth: action.payload,
      };
    case FETCH_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };
 

    default:
      return state;
  }
};



export default CartfetchReducer;
