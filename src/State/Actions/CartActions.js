import axios from 'axios';
import { CART_API } from '../../Components/apiUrls';

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';


export const fetchCartSuccess = (auth) => ({
  type: FETCH_CART_SUCCESS,
  payload: auth,
});

export const fetchCartFailure = (error) => ({
  type: FETCH_CART_ERROR,
  payload: error,
});

export const addToCart = (auth) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: auth,
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_ERROR,
  payload: error,
});



// export const fetchCartData = (auth) => {
//   return (dispatch) => {
//     // Make API call to fetch cart items
//     fetch(CART_API,{
//       method: 'GET',
//       body: JSON.stringify({type:"view"}),
//       headers: { 
//         'Content-Type': 'application/json',
//         Authorization: auth,
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         dispatch(fetchCartSuccess(data));
//         console.log(data);
//       })
//       .catch(error => {
//         dispatch(fetchCartFailure(error.message));
//       });
//   };
// };





// export const addToCart = (product,auth) => {
//   return (dispatch) => {
//     // Make API call to post product details
//     fetch(CART_API, {
//       method: 'POST',
//       body: JSON.stringify({type:"add"},product),
//       headers: { 
//         'Content-Type': 'application/json',
//         Authorization: `Token ${auth}`,
//       },
    
//     })
//       .then(response => response.json())
//       .then(data => {
//         dispatch(addToCartSuccess(data,auth));
//       })
//       .catch(error => {
//         dispatch(addToCartFailure(error.message));
//       });
//   };
// };


