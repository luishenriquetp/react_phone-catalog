/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { StyledProductCard } from './StyledProductCard.ts';
import Icon from '../IconComponent/IconComponent.tsx';
import { IconType } from '../IconComponent/IconComponent.types.ts';
import { Product } from '../../types/types.ts';
import { useAppSelector } from '../../context/hooks.ts';
import { addProduct } from '../../context/cartContext/cartSlice.ts';

interface Prop {
  product: Product;
  category: string | undefined;
}

function ProductCard({ product, category }: Prop) {
  const { products } = useAppSelector(state => state.cart);
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [addToCard, setAddToCard] = useState(() => products.some(e => e.itemId === product.itemId));

  const handleAddProductToCartClickButton = () => {
    dispatch(addProduct(product));
    setAddToCard(true);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      {/* {remember to add a link to the correct page} */}
      <StyledProductCard className="product-card">
        <a className="product-card__link" href={`/${category}/${product.itemId}`}>
          <div className="product-card__wrapper">
            <img className="product-card__image" src={product.image} alt={product.name} />
            <div className="product-card__description">
              <h4 className="product-card__description-title">{product.name}</h4>
              <div className="product-card__description-price-wrapper">
                <h3 className="product-card__description-price-discount">{`$${product.price}`}</h3>
                <h3 className="product-card__description-price">{`$${product.fullPrice}`}</h3>
              </div>
            </div>
            <hr className="product-card__custom-line" />
            <div className="product-card__details">
              <div className="product-card__details-container">
                <div className="product-card__details-screen">
                  <span className="product-card__details-title">Screen</span>
                  <span className="product-card__details-description">{product.screen}</span>
                </div>
                <div className="product-card__details-capacity">
                  <span className="product-card__details-title">Capacity</span>
                  <span className="product-card__details-description">{product.capacity}</span>
                </div>
                <div className="product-card__details-ram">
                  <span className="product-card__details-title">RAM</span>
                  <span className="product-card__details-description">{product.ram}</span>
                </div>
              </div>
            </div>
            <div className="product-card__btn-container">
              <button
                type="button"
                className={`product-card__btn${addToCard ? '--clicked' : ''}`}
                onClick={handleAddProductToCartClickButton}
                disabled={addToCard}
              >
                {addToCard ? 'Added' : 'Add to cart'}
              </button>
              <button
                type="button"
                className={`product-card__btn-favorite${favorite ? '--clicked' : ''}`}
                onClick={handleFavoriteClick}
              >
                <Icon icon={favorite ? IconType.FILLED_HEARTLIKE : IconType.EMPTY_HEARTLIKE} />
              </button>
            </div>
          </div>
        </a>
      </StyledProductCard>
    </>
  );
}

export default ProductCard;
