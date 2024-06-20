/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledCartPage from './StyledCartPage.ts';
import { useAppSelector } from '../../context/hooks.ts';
import { SkeletonContainer } from '../../components/Skeleton/StyledSkeleton.ts';

function PageCart() {
  const { products: productsData, quantity } = useAppSelector(state => state.cart);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledCartPage className="cart-items">
      <button type="button" className="cart-items__btn">
        <Icon icon={IconType.ARROW_LEFT} fill="black" />
        <span className="cart-items__btn-title">Back</span>
      </button>
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {isLoading ? (
            <SkeletonContainer className="skeleton-container">
              <div className="skeleton skeleton-cart-items">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="skeleton skeleton-cart">
                    <div className="skeleton skeleton-cart-top">
                      <div className="skeleton skeleton-img" />
                      <div className="skeleton skeleton-title" />
                    </div>
                    <div className="skeleton skeleton-cart-bottom">
                      <div className="skeleton skeleton-buttons" />
                      <div className="skeleton skeleton-buttons" />
                    </div>
                  </div>
                ))}
              </div>
              <SkeletonContainer className="skeleton-container">
                <div className="skeleton skeleton-cart-checkout">
                  <div className="skeleton skeleton-cart-checkout-title" />
                  <div className="skeleton skeleton-cart-checkout-amount" />
                </div>
              </SkeletonContainer>
            </SkeletonContainer>
          ) : (
            <>
              {productsData.map((product, idx) => (
                <CartItem key={product.id} product={product} quantity={quantity[idx]} />
              ))}
              <CartTotalAmount />
            </>
          )}
        </div>
      </div>
    </StyledCartPage>
  );
}

export default PageCart;
