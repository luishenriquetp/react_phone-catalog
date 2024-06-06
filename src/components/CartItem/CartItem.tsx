import React, { useState } from 'react';
import {
  StyledBottomContent,
  StyledCartItem,
  StyledCountButton,
  StyledCountNumber,
  StyledCountWrapper,
  StyledDeleteProductButton,
  StyledDescription,
  StyledProductImage,
  StyledTopContent,
  StyledTotalPrice,
} from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.types.ts';

function CartItem() {
  const [count, setCount] = useState(1);
  const totalPrice = 999;

  return (
    <StyledCartItem className="cart-item">
      <StyledTopContent className="cart-item__top-content">
        <StyledDeleteProductButton>
          <Icon icon={IconType.CLOSE} />
        </StyledDeleteProductButton>
        <StyledProductImage
          className="top-content__product-image"
          src="public/img/phones/apple-iphone-7/black/00.webp"
          alt="iphone 7 black"
        />
        <StyledDescription className="top-content__product-title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </StyledDescription>
      </StyledTopContent>
      <StyledBottomContent className="cart-item__bottom-content">
        <StyledCountWrapper className="bottom-content__wrapper">
          <StyledCountButton
            className="bottom-content__minus-btn"
            onClick={() => setCount(state => state - 1)}
            disabled={count <= 1}
          >
            -
          </StyledCountButton>
          <StyledCountNumber className="bottom-content__quantity">{count}</StyledCountNumber>
          <StyledCountButton
            className="bottom-plus-btn"
            onClick={() => setCount(state => state + 1)}
          >
            <Icon icon={IconType.PLUS} />
          </StyledCountButton>
        </StyledCountWrapper>
        <StyledTotalPrice className="bottom-content__total-price">{`$${totalPrice * count}`}</StyledTotalPrice>
      </StyledBottomContent>
    </StyledCartItem>
  );
}

export default CartItem;
