import { CATEGORYLIST_API, PRODUCTLIST_API } from "../../Components/apiUrls";

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
 
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
        console.log(responseData);
        if (
            responseData &&
            responseData.data &&
            Array.isArray(responseData.data) &&
            responseData.data.length > 0
          ) {
            for (let i = 0; i < responseData.data.length; i++) {
                dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: responseData.data });
              console.log(responseData.data);
            }
          } else {
            console.error("Error: Invalid data structure");
          }
      } catch (error) {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
      }
    };
  };



  
  export const fetchProducts = (categoryId) => {
    return (dispatch) => {
      // Prepare the request body
      const requestBody = {
        type: 'view',
        cat_id: [categoryId],
      };
  
      // Make API call to fetch products based on category
      fetch(PRODUCTLIST_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error });
        });
    };
  };
  

  export const setSelectedCategory = categoryId => {
    return {
      type: SET_SELECTED_CATEGORY,
      payload: categoryId
    };
  };
  