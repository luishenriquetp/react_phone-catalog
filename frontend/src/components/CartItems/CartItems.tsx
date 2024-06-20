/* eslint-disable react/no-array-index-key */
import React from 'react';
import CartTotalAmount from '../CartTotalAmount/CartTotalAmount.tsx';
import { StyledCartItems, StyledCartItemsWrapper } from './StyledCartItems.ts';

function CartItems() {
  return (
    <StyledCartItems className="cart-items">
      <StyledCartItemsWrapper className="cart-items__wrapper" />
      <CartTotalAmount />
    </StyledCartItems>
  );
}

export default CartItems;
