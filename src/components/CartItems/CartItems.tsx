import React from 'react';
import CartItem from '../CartItem/CartItem.tsx';
import CartTotalAmount from '../CartTotalAmount/CartTotalAmount.tsx';
import StyledCartItems from './StyledCartItems.ts';

function CartItems() {
  return (
    <StyledCartItems className="cart-items">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartTotalAmount />
    </StyledCartItems>
  );
}

export default CartItems;
