import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './Reducers/CartShowReducer';


const rootReducer = combineReducers(
    cartReducer,

  );

  const store = configureStore({
    reducer: {
      product: cartReducer,

    }

  });


  

  
  export default store