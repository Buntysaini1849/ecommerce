import axios from 'axios';
import { CART_API } from '../../Components/apiUrls';

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';


export const fetchCartSuccess = (cartItems) => ({
  type: FETCH_CART_SUCCESS,
  payload: cartItems,
});

export const addToCartSuccess = (item) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: item,
});



export const fetchCartData = (authToken) => {
  return (dispatch) => {
    // Make API call to fetch cart items
    fetch(CART_API,{
      method: 'GET',
      body: JSON.stringify({type:"view"}),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
        console.log(data);
      })
      .catch(error => {
        dispatch({ type: 'FETCH_CART_ERROR', payload: error.message });
      });
  };
};





export const addToCart = (proditem,authToken) => {
  return (dispatch) => {
    // Make API call to post product details
    fetch(CART_API, {
      method: 'POST',
      body: JSON.stringify({type:"add"}),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'ADD_TO_CART_ERROR', payload: error.message });
      });
  };
};


