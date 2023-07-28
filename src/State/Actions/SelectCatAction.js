export const SET_SELECTED_CATEGORIES = "SET_SELECTED_CATEGORIES";

export const setSelectedCategories = (categoryId) => ({
    type: SET_SELECTED_CATEGORIES,
    payload: categoryId,
  })