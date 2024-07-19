/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import StyledCartPage from './StyledCartPage.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { getActiveCart } from '../../api/getAll.ts';
import { OrderItem } from '../../types/types.ts';
import { updateAllProducs } from '../../context/cartContext/cartSlice.ts';

function PageCart(): React.ReactNode {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const dispatch = useAppDispatch();
  const tokenSession = useAppSelector(state => state.user.tokenSession);

  useEffect(() => {
    getActiveCart(tokenSession)
      .then(data => {
        if (!data) {
          return []
        }
        dispatch(updateAllProducs({orderItemsArray: data}));
        setOrderItems(data);
      });
  }, [tokenSession]);

  return (
    <StyledCartPage className="cart-items">
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {orderItems.map(orderItem => (<CartItem firstOrder={orderItem} setOrdersItems={setOrderItems} />))}
        </div>
        {<CartTotalAmount />}
      </div>
    </StyledCartPage>
  );
}

export default PageCart;