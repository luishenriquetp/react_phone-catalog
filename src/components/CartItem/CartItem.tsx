/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import StyledCartItem from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { Product } from '../../pages/CartPage/CartPage.tsx';

function CartItem({ name, price, image, quantity }: Product) {
  const [count, setCount] = useState<number>(quantity);

  return (
    <StyledCartItem className="cart-item">
      <div className="cart-item__top-content">
        <button type="button" className="cart-item__remove-btn">
          <Icon icon={IconType.CLOSE} />
        </button>
        <img className="top-content__product-image" src={image} alt={name} />
        <span className="top-content__product-title">{name}</span>
      </div>
      <div className="cart-item__bottom-content">
        <div className="bottom-content__wrapper">
          <button
            type="button"
            className="bottom-content__counter-btn"
            onClick={() => setCount(state => state - 1)}
            disabled={count <= 1}
          >
            <Icon icon={IconType.MINUS} fill="black" />
          </button>
          <span className="bottom-content__quantity">{count}</span>
          <button
            type="button"
            className="bottom-content__counter-btn"
            onClick={() => setCount(state => state + 1)}
          >
            <Icon icon={IconType.PLUS} fill="black" />
          </button>
        </div>
        <span className="bottom-content__total-price">{`$${price * count}`}</span>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
