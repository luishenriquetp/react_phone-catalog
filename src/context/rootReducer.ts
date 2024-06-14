import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartContext/cartSlice.ts';
import { favouriteReducer } from './favoriteContext/index.ts';
import { userReducer } from './userContext/index.ts';

const rootReducer = combineReducers({
  cart: cartReducer,
  favourites: favouriteReducer,
  user: userReducer,
});

export default rootReducer;
