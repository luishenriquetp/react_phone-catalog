import React, { useState } from 'react';
import StyledCartItem from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { Phone } from '../../types/types.ts';

interface Prop {
  phone: Phone;
}

function CartItem(prop: Prop) {
  const [count, setCount] = useState<number>(0);
  const {phone} = prop;

  return (
    <StyledCartItem className="cart-item">
      <div className="cart-item__top-content">
        <button type="button" className="cart-item__remove-btn">
          <Icon icon={IconType.CLOSE} />
        </button>
        <img className="top-content__product-image" src={phone.images[0]} alt={phone.name} />
        <span className="top-content__product-title">{phone.name}</span>
      </div>
      <div className="cart-item__bottom-content">
        <div className="bottom-content__wrapper">
          <button
            type="button"
            className="bottom-content__counter-btn"
            onClick={() => setCount(state => state - 1 < -1 ? 0 : state - 1)}
            disabled={count <= 0}
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
        <span className="bottom-content__total-price">{`$${phone.priceRegular * count}`}</span>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
