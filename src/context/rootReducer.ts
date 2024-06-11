import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartContext/cartSlice.ts';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;