import React from 'react';
import { StyledBackHomeButton, StyledSpan } from '../CartPage/StyledCartPage.ts';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';

type Props = {};

function ProductDetailsPage({}: Props) {
  return (
    <StyledProductDetailsPage className="product-details-page">
      <StyledBackHomeButton className="cart-page__back-home-btn">
        {/* Global Component */}
        <Icon icon={IconType.ARROW_LEFT} fill="#0F0F11" />
        <StyledSpan className="cart-page__btn-description">Back</StyledSpan>
      </StyledBackHomeButton>

      <h1 className="product-details-page__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
    </StyledProductDetailsPage>
  );
}

export default ProductDetailsPage;
