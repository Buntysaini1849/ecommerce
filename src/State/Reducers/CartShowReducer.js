import { TOGGLE_CART } from "../Actions/CartShowAction";


const initialState = {
  showCart: false,
};

const cartReducer = (state = { showCart: false }, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};

export default cartReducer;
