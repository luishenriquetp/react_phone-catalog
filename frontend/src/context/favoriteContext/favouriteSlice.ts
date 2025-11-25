/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types.ts';

interface FavouriteState {
  products: Product[];
}

const initialState: FavouriteState = {
  products: [],
};

const favouriteSlice = createSlice({
  name: 'favouriteState',
  initialState,
  reducers: {
    addFavourite: (state: FavouriteState, action: PayloadAction<Product>) => {
      const isInFavoriteYet = state.products.findIndex(e => e.id === action.payload.id);

      if (isInFavoriteYet === -1) {
        state.products.push(action.payload);
      }
    },
    removeFavourite: (state: FavouriteState, action: PayloadAction<Product>) => {
      const indxToErase = state.products.findIndex(e => e.id === action.payload.id);
      state.products.splice(indxToErase, 1);
    },
    updateAllFavourites: (state: FavouriteState, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { addFavourite, removeFavourite, updateAllFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
