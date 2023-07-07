import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './Reducers/CartShowReducer';
import CartfetchReducer from './Reducers/CartfetchReducer';
import LoginReducer from './Reducers/LoginReducer';
import { useReducer } from 'react';
import userReducer from './Reducers/UserReducer';


const rootReducer = combineReducers(
    cartReducer,
    CartfetchReducer,
    LoginReducer,
    userReducer,

  );

  const store = configureStore({
    reducer: {
      product: cartReducer,
      cart:CartfetchReducer,
      user: userReducer,
      login: LoginReducer,

    }

  });


  

  
  export default store