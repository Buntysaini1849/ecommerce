

// Initial state with an empty selectedProduct
const initialState = {

  selectedProduct: null,
};

// Action types
const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';


// Reducer
const ProductViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};


export default ProductViewReducer;

