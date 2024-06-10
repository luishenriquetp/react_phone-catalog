/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import CartItem from '../../components/CartItem/CartItem.tsx';
import CartTotalAmount from '../../components/CartTotalAmount/CartTotalAmount.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';
import StyledCartPage from './StyledCartPage.ts';

export type Product = {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  quantity: number;
};

export const productsData: Product[] = [
  {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
    quantity: 1,
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.webp',
    quantity: 1,
  },
  {
    id: 3,
    category: 'phones',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.webp',
    quantity: 1,
  },
];

function Cart() {
  const [products] = useState(productsData);

  return (
    <StyledCartPage className="cart-items">
      <button type="button" className="cart-items__btn">
        <Icon icon={IconType.ARROW_LEFT} fill="black" />
        <span className="cart-items__btn-title">Back</span>
      </button>
      <h1 className="cart-item__title">Cart</h1>

      <div className="cart-item__products-wrapper">
        <div className="cart-item__products-content">
          {products.map((product: Product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              category=""
              itemId=""
              fullPrice={0}
              screen=""
              capacity=""
              color=""
              ram=""
              year={0}
            />
          ))}
        </div>
        <CartTotalAmount />
      </div>
    </StyledCartPage>
  );
}

export default Cart;
