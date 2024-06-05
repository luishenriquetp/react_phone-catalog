import React from 'react';
import {
  StyledCartTitles,
  StyledCartTotalAmount,
  StyledCheckoutButton,
  StyledLine,
  StyledQuantitySpan,
  StyledTitle,
} from './StyledCartTotalAmount.ts';

function CartTotalAmount() {
  return (
    <StyledCartTotalAmount className="cart-total__wrapper">
      <StyledCartTitles className="cart-total__titles">
        <StyledTitle className="cart-total__title-content">$2567</StyledTitle>
        <StyledQuantitySpan className="cart-total__total-quantity">
          Total for 3 items
        </StyledQuantitySpan>
        <StyledLine />
      </StyledCartTitles>
      <StyledCheckoutButton className="cart-total__checkout-btn">Checkout</StyledCheckoutButton>
    </StyledCartTotalAmount>
  );
}

export default CartTotalAmount;
