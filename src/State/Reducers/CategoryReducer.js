import {FETCH_CATEGORIES_SUCCESS,FETCH_CATEGORIES_FAILURE,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, SET_SELECTED_CATEGORY} from '../Actions/CategoryActions';

const initialState = {
    categories: [],
    selectedCategory: null,
    productitems: [],
  };
  
  const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_SUCCESS:
        return { ...state, categories: action.payload };
      case FETCH_CATEGORIES_FAILURE:
        return state; // Handle the failure case as per your requirement
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, productitems: action.payload };
      case FETCH_PRODUCTS_FAILURE:
        return state; // Handle the failure case as per your requirement
      case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
      default:
        return state;
    }
  };
  
  export default CategoryReducer;
  