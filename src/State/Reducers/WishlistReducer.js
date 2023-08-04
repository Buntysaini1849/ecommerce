import { SET_WISHLIST_ITEMS } from "../Actions/WishlistAction";

const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default wishlistReducer;
