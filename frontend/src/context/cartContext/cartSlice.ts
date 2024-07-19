/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItem } from '../../types/types.ts';

interface CartState {
  orderItems: OrderItem[];
  totalPrice: number;
}

const initialState: CartState = {
  orderItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    incrementTotalPrice: (state: CartState, action: PayloadAction<{item: OrderItem, price: number}>) => {
      state.totalPrice += action.payload.price;
    },
    decreaseTotalPrice: (state: CartState, action: PayloadAction<{item: OrderItem, price: number}>) => {
      state.totalPrice -= action.payload.price;
    },
    addProduct: (state: CartState, action: PayloadAction<OrderItem>) => {
      state.orderItems.push(action.payload);
      state.totalPrice = state.totalPrice = state.orderItems.reduce((acc, e) => acc + e.totalPrice, 0);
    },
    removeProduct: (state: CartState, action: PayloadAction<OrderItem>) => {
      const indxToErase = state.orderItems.findIndex(e => e.id === action.payload.id);
      state.orderItems = state.orderItems.splice(indxToErase, 1);
      state.totalPrice = state.orderItems.reduce((acc, e) => acc + e.totalPrice, 0);
    },
    updateAllProducs: (
      state: CartState,
      action: PayloadAction<{ orderItemsArray: OrderItem[] }>,
    ) => {
      state.orderItems = action.payload.orderItemsArray;
      state.totalPrice = action.payload.orderItemsArray.reduce((acc, e) => acc + e.totalPrice, 0);
    },
  },
});

export const {
  incrementTotalPrice,
  decreaseTotalPrice,
  addProduct,
  removeProduct,
  updateAllProducs,
} = cartSlice.actions;
export default cartSlice.reducer;
