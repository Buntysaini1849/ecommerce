import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './Reducers/CartShowReducer';
import CartfetchReducer from './Reducers/CartfetchReducer';
import LoginReducer from './Reducers/LoginReducer';
import { useReducer } from 'react';
import userReducer from './Reducers/UserReducer';
import CategoryReducer from './Reducers/CategoryReducer';


const rootReducer = combineReducers(
    cartReducer,
    CartfetchReducer,
    LoginReducer,
    userReducer,
    CategoryReducer,

  );

  const store = configureStore({
    reducer: {
      product: cartReducer,
      cart:CartfetchReducer,
      user: userReducer,
      login: LoginReducer,
      catpro:CategoryReducer,

    }

  });


  

  
  export default store