
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';


export const setSelectedProduct = (proditem) => {
  return {
    type: SET_SELECTED_PRODUCT,
    payload: proditem,
  };
};

