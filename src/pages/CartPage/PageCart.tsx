import React from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledCartPage from './StyledCartPage.ts';
import { useAppSelector } from '../../context/hooks.ts';

function PageCart() {
  const { products: productsData, quantity } = useAppSelector(state => state.cart);

  return (
    <StyledCartPage className="cart-items">
      <button type="button" className="cart-items__btn">
        <Icon icon={IconType.ARROW_LEFT} fill="black" />
        <span className="cart-items__btn-title">Back</span>
      </button>
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {productsData.map((product, idx) => (
            <CartItem key={product.id} product={product} quantity={quantity[idx]} />
          ))}
        </div>
        <CartTotalAmount />
      </div>
    </StyledCartPage>
  );
}

export default PageCart;
