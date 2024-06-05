import React from 'react';
import {
  StyledBackHomeButton,
  StyledCartPage,
  StyledH1Title,
  StyledSpan,
} from './StyledCartPage.ts';
import CartItems from '../../components/CartItems/CartItems.tsx';

function CartPage() {
  return (
    <StyledCartPage className="cart-page">
      <StyledBackHomeButton>
        <img src="public/img/icons/arrow-left.svg" alt="arrow-left" />
        <StyledSpan>Back</StyledSpan>
      </StyledBackHomeButton>
      <StyledH1Title>Cart</StyledH1Title>
      <CartItems />
    </StyledCartPage>
  );
}

export default CartPage;
