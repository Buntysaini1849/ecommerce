import { CATEGORYLIST_API, PRODUCTLIST_API } from "../../Components/apiUrls";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";


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
