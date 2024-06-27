import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledProductCard } from './StyledProductCard.ts';
import { Product } from '../../types/types.ts';
import { addProduct } from '../../context/cartContext/cartSlice.ts';
import { addFavourite, removeFavourite } from '../../context/favoriteContext/favouriteSlice.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import store from '../../context/store.ts';

interface Prop {
  product: Product;
}

function ProductCard({ product }: Prop): React.ReactNode {
  const productIsInCart = store.getState().cart.products.some(e => e.itemId === product.itemId);

  const isFavoriteProduct = store
    .getState()
    .favourites.products.some(e => e.itemId === product.itemId);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(isFavoriteProduct);
  const [addToCardOrNot, setAddToCardOrNot] = useState(productIsInCart);

  const handleAddProductToCartClickButton = () => {
    dispatch(addProduct(product));
    setAddToCardOrNot(true);
  };

  const handleFavoriteClick = () => {
    if (isFavoriteProduct) {
      dispatch(removeFavourite(product));
    } else {
      dispatch(addFavourite(product));
    }

    setFavorite(!favorite);
  };

  return (
    <StyledProductCard className="product-card">
      <div className="product-card__wrapper">
        <Link className="product-card__link" to={`/shop/${product.category}/${product.itemId}`}>
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
        </Link>
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
            aria-label="favorite-btn"
          >
            <Icon
              icon={favorite ? IconType.FILLED_HEARTLIKE : IconType.EMPTY_HEARTLIKE}
              size={18}
            />
          </button>
        </div>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
