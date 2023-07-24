import { FETCH_CART_SUCCESS,FETCH_CART_ERROR,ADD_TO_CART_ERROR, ADD_TO_CART_SUCCESS,REMOVE_CART_ITEM } from '../Actions/CartActions';

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
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        error: action.payload
      };
 
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        product: [...state.product, action.payload],
        error: null,
        auth: action.payload,
      };
      case REMOVE_CART_ITEM:
        return { 
          ...state,
          product: state.product.filter(item => item.id !== action.payload),
          error:null,
          auth: action.payload,
        };
    default:
      return state;
  }
};



export default CartfetchReducer;
