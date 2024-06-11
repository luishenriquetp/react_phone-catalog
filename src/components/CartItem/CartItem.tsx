import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import StyledCartItem from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { Phone } from '../../types/types.ts';
import {
  decreaseTotalPrice,
  incrementTotalPrice,
  removeProduct,
} from '../../context/cartContext/cartSlice.ts';

interface Prop {
  phone: Phone;
  quantity: number;
}

function CartItem(prop: Prop) {
  const { phone, quantity } = prop;
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const handleDeleteClicekButton = useCallback(() => {
    dispatch(removeProduct(phone));
  }, [phone, dispatch]);

  const handleClickDecreaseQuantityItem = () => {
    dispatch(decreaseTotalPrice(phone));
  };

  const handleClickIncrementQuantityItem = () => {
    dispatch(incrementTotalPrice(phone));
  };

  return (
    <StyledCartItem className="cart-item">
      <div className="cart-item__top-content">
        <button
          type="button"
          className="cart-item__remove-btn"
          aria-label="remove item cart"
          onClick={handleDeleteClicekButton}
        >
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
            aria-label="decrease this item from cart"
            onClick={handleClickDecreaseQuantityItem}
            disabled={quantity <= 1}
          >
            <Icon icon={IconType.MINUS} fill="black" />
          </button>
          <span className="bottom-content__quantity">{quantity}</span>
          <button
            type="button"
            aria-label="add this item to cart"
            className="bottom-content__counter-btn"
            onClick={handleClickIncrementQuantityItem}
          >
            <Icon icon={IconType.PLUS} fill="black" />
          </button>
        </div>
        <span className="bottom-content__total-price">{`$${phone.priceDiscount * quantity}`}</span>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
