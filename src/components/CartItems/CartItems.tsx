import React from 'react';
import CartItem from '../CartItem/CartItem.tsx';
import CartTotalAmount from '../CartTotalAmount/CartTotalAmount.tsx';
import { StyledCartItems, StyledCartItemsWrapper } from './StyledCartItems.ts';

function CartItems() {
  return (
    <StyledCartItems className="cart-items">
      <StyledCartItemsWrapper className="cart-items__wrapper">
        <CartItem />
        <CartItem />
        <CartItem />
      </StyledCartItemsWrapper>
      <CartTotalAmount />
    </StyledCartItems>
  );
}

export default CartItems;
