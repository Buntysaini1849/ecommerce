import { SET_SELECTED_CATEGORIES } from "../Actions/SelectCatAction";

const initialState = {
  selectedCategoryId: null,
};


const SelectCatReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECTED_CATEGORIES:
        return {
          ...state,
          selectedCategoryId: action.payload,
        };
      default:
        return state;
    }
  };

  export default SelectCatReducer;