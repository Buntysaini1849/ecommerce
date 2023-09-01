import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers, createStore } from 'redux';
import cartReducer from './Reducers/CartShowReducer';
import CartfetchReducer from './Reducers/CartfetchReducer';
import LoginReducer from './Reducers/LoginReducer';
import userReducer from './Reducers/UserReducer';
import CategoryReducer from './Reducers/CategoryReducer';
import ProductViewReducer from './Reducers/ProductViewReducer';
import SelectCatReducer from './Reducers/SelectCatReducer';
import CollapseReducer from './Reducers/CollapseReducer';
import wishlistReducer from './Reducers/WishlistReducer';
import {cartItemCountReducer } from './Reducers/cartItemCountReducer';

const rootReducer = combineReducers({
  product: cartReducer,
  cart: CartfetchReducer,
  user: userReducer,
  login: LoginReducer,
  catpro: CategoryReducer,
  proditem: ProductViewReducer,
  catId: SelectCatReducer,
  collapse: CollapseReducer,
  wishlist:wishlistReducer,
  cartCount:cartItemCountReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;