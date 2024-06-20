import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import StyledCartItem from './StyledCartItem.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { Product } from '../../types/types.ts';
import {
  decreaseTotalPrice,
  incrementTotalPrice,
  removeProduct,
} from '../../context/cartContext/cartSlice.ts';

interface Prop {
  product: Product;
  quantity: number;
}

function CartItem(prop: Prop) {
  const { product, quantity } = prop;
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const handleDeleteClicekButton = useCallback(() => {
    dispatch(removeProduct(product));
  }, [product, dispatch]);

  const handleClickDecreaseQuantityItem = () => {
    dispatch(decreaseTotalPrice(product));
  };

  const handleClickIncrementQuantityItem = () => {
    dispatch(incrementTotalPrice(product));
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
        <img className="top-content__product-image" src={product.image} alt={product.name} />
        <span className="top-content__product-title">{product.name}</span>
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
        <span className="bottom-content__total-price">{`$${product.price * quantity}`}</span>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
