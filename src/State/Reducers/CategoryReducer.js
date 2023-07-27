import {FETCH_CATEGORIES_SUCCESS,FETCH_CATEGORIES_FAILURE} from '../Actions/CategoryActions';

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
      default:
        return state;
    }
  };
  
  export default CategoryReducer;
  