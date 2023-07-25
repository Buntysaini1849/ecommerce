import { CATEGORYLIST_API, PRODUCTLIST_API } from "../../Components/apiUrls";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      // Make API call to fetch categories
      const response = await fetch(CATEGORYLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();
    
      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: responseData.data,
          });
          
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    } catch (error) {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
    }
  };
};

export const fetchProducts = async (categoryId) => {
  return async (dispatch) => {
    try {
      const requestBody = {
        type: "view",
        cat_id: [categoryId],
      };

      const response = await fetch(PRODUCTLIST_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseDatas = await response.json();
     
      if (
        responseDatas &&
        responseDatas.data &&
        Array.isArray(responseDatas.data) &&
        responseDatas.data.length > 0
      ) {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: responseDatas.data });
       
      } else {
        console.error("Error: Invalid data structure");
      }
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
    }
  };
};

export const setSelectedCategory = (categoryId) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: categoryId,
  };
};
