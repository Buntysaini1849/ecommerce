import { SET_CART_COUNT } from "../Actions/CartActions";


const initialState = {
    cartItemsCount: 0,
  };
  
  export const cartItemCountReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART_COUNT:
        return {
          ...state,
          cartItemsCount: action.payload,
        };
      default:
        return state;
    }
  };
  