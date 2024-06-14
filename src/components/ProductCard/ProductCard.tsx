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
import { addFavourite, removeFavourite } from '../../context/favoriteContext/favouriteSlice.ts';

interface Prop {
  product: Product;
}

function ProductCard({ product }: Prop) {
  const productIsInCart = useAppSelector(state => state.cart.products.some(e => e.itemId === product.itemId));
  const isFavoriteProduct = useAppSelector(state => state.favourites.products.some(e => e.itemId === product.itemId));
  const dispatch: Dispatch<UnknownAction> = useDispatch();
  const [favorite, setFavorite] = useState(isFavoriteProduct);
  const [addToCardOrNot, setAddToCardOrNot] = useState(productIsInCart);

  const handleAddProductToCartClickButton = () => {
    dispatch(addProduct(product));
    setAddToCardOrNot(true);
  };

  const handleFavoriteClick = () => {
    if (isFavoriteProduct) {
      dispatch(removeFavourite(product))
    } else {
      dispatch(addFavourite(product));
    }

    setFavorite(!favorite);
  };

  return (
    <>
      {/* {remember to add a link to the correct page} */}
      <StyledProductCard className="product-card">
        <div className="product-card__wrapper">
          <a className="product-card__link" href={`/shop/${product.category}/${product.itemId}`}>
            <img className="product-card__image" src={`/${product.image}`} alt={product.name} />
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
          </a>
          <div className="product-card__btn-container">
            <button
              type="button"
              className={`product-card__btn${addToCardOrNot ? '--clicked' : ''}`}
              onClick={handleAddProductToCartClickButton}
              disabled={addToCardOrNot}
            >
              {addToCardOrNot ? 'Added' : 'Add to cart'}
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
      </StyledProductCard>
    </>
  );
}

export default ProductCard;
