/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import StyledCartPage from './StyledCartPage.ts';
import { useAppSelector } from '../../context/hooks.ts';

function PageCart(): React.ReactNode {
  const { products: productsData, quantity } = useAppSelector(state => state.cart);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledCartPage className="cart-items">
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {isLoading || (
            <>
              {productsData.map((product, idx) => (
                <CartItem key={product.id} product={product} quantity={quantity[idx]} />
              ))}
            </>
          )}
        </div>
        {isLoading || <CartTotalAmount />}
      </div>
    </StyledCartPage>
  );
}

export default PageCart;
