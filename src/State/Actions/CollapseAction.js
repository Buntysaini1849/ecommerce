// Action Types
export const SET_COLLAPSE_OPEN = 'SET_COLLAPSE_OPEN';
export const SET_SELECTED_INGREDIENT = 'SET_SELECTED_INGREDIENT';
export const SET_SELECTED_REMEDIES   =  'SET_SELECTED_REMEDIES';


// Action Creators
export const setCollapseOpen = (isOpen) => {
  return {
    type: SET_COLLAPSE_OPEN,
    payload: isOpen,
  };
};


export const setSelectedIngredient = (ingredient) => ({
  type: SET_SELECTED_INGREDIENT,
  payload: ingredient,
});


export const setSelectedRemedies = (remedies) => ({
  type: SET_SELECTED_REMEDIES,
  payload: remedies,
});
