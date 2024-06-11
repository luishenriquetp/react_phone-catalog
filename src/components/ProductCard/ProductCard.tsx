/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { StyledProductCard } from './StyledProductCard.ts';
import Icon from '../IconComponent/IconComponent.tsx';
import { IconType } from '../IconComponent/IconComponent.types.ts';
import { Phone } from '../../types/types.ts';
import { useAppSelector } from '../../context/hooks.ts';

interface Prop {
  phone: Phone;
}

function ProductCard({ phone }: Prop) {
  const {phones} = useAppSelector(state => state.cart);
  const [favorite, setFavorite] = useState(false);
  const [addToCard, setAddToCard] = useState(() => phones.some(e => e.id === phone.id) ? true : false);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      {/* {remember to add a link to the correct page} */}
      <StyledProductCard className="product-card">
        <a className="product-card__link">
          <div className="product-card__wrapper">
            <img className="product-card__image" src={phone.images[0]} alt={phone.name} />
            <div className="product-card__description">
              <h4 className="product-card__description-title">{phone.name}</h4>
              <div className="product-card__description-price-wrapper">
                <h3 className="product-card__description-price-discount">{`$${phone.priceDiscount}`}</h3>
                <h3 className="product-card__description-price">{`$${phone.priceRegular}`}</h3>
              </div>
            </div>
            <hr className="product-card__custom-line" />
            <div className="product-card__details">
              <div className="product-card__details-container">
                <div className="product-card__details-screen">
                  <span className="product-card__details-title">Screen</span>
                  <span className="product-card__details-description">{phone.screen}</span>
                </div>
                <div className="product-card__details-capacity">
                  <span className="product-card__details-title">Capacity</span>
                  <span className="product-card__details-description">{phone.capacity}</span>
                </div>
                <div className="product-card__details-ram">
                  <span className="product-card__details-title">RAM</span>
                  <span className="product-card__details-description">{phone.ram}</span>
                </div>
              </div>
            </div>
            <div className="product-card__btn-container">
              <button
                type="button"
                className={`product-card__btn${addToCard ? '--clicked' : ''}`}
                onClick={() => setAddToCard(state => !state)}
              >
                {addToCard ? 'Add to cart' : 'Added'}
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
