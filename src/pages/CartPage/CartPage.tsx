/* eslint-disable react/no-array-index-key */
import React from 'react';
import StyledCartPage from './StyledCartPage.ts';
import CartItems from '../../components/CartItems/CartItems.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';

function CartPage() {
  return (
    <StyledCartPage className="cart-page">
      <button type="button" className="cart-page__back-home-btn">
        <Icon icon={IconType.ARROW_LEFT} />
        <span className="cart-page__btn-description">Back</span>
      </button>
      <h1 className="cart-page__title">Cart</h1>
      <CartItems />
    </StyledCartPage>
  );
}

export default CartPage;
