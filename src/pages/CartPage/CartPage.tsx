import React from 'react';
import {
  StyledBackHomeButton,
  StyledCartPage,
  StyledH1Title,
  StyledSpan,
} from './StyledCartPage.ts';
import CartItems from '../../components/CartItems/CartItems.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';

function CartPage() {
  return (
    <StyledCartPage className="cart-page">
      <StyledBackHomeButton className="cart-page__back-home-btn">
        <Icon icon={IconType.ARROW_LEFT} />
        <StyledSpan className="cart-page__btn-description">Back</StyledSpan>
      </StyledBackHomeButton>
      <StyledH1Title className="cart-page__title">Cart</StyledH1Title>
      <CartItems />
    </StyledCartPage>
  );
}

export default CartPage;
