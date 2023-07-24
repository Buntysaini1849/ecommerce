import axios from 'axios';
import { CART_API } from '../../Components/apiUrls';

export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
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

export const removecartITem = (id,auth) => ({
 type: REMOVE_CART_ITEM,
  payload:{id,auth},
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_ERROR,
  payload: error,
});






