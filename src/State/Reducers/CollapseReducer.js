import { SET_COLLAPSE_OPEN,SET_SELECTED_INGREDIENT, SET_SELECTED_REMEDIES } from "../Actions/CollapseAction";

const initialState = {
  collapseOpen: false,
  selectedIngredient: "",
  selectedRemedies:"",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLAPSE_OPEN:
      return {
        ...state,
        collapseOpen: action.payload,
      };
    case SET_SELECTED_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.payload,
      };
      case SET_SELECTED_REMEDIES:
      return {
        ...state,
        selectedRemedies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
