/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledBackHomeButton, StyledSpan } from '../CartPage/StyledCartPage.ts';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';
import data from '../../../public/api/phones.json';

/*
  StyledBackHomeButton - Line 130 to 133 - probably will be a global component
*/

export type CardData = {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description?: {
    title: string;
    text: string[];
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

type Favorites = {
  id: string;
  isFavorite: boolean;
};

type Selected = {
  id: string;
  isSelected: boolean;
};

function ProductDetailsPage() {
  const [selectImg, SetSelectImg] = useState<string>('');
  const [phone, SetPhone] = useState<CardData | null>(null);
  const [color, SetColor] = useState<string>('');
  const [capacity, SetCapacity] = useState<string>('');
  const [favorites, SetFavorites] = useState<Favorites[]>([]);
  const [selected, Setselected] = useState<Selected[]>([]);

  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (phoneId) {
      const clickedPhone = data.find(el => el.id === phoneId);
      if (clickedPhone) {
        SetPhone(clickedPhone);
        SetCapacity(clickedPhone.capacity);
        SetColor(clickedPhone.color);
        SetSelectImg(clickedPhone.images[0]);
      } else {
        navigate('/not-found', { replace: true });
      }
    }
  }, [navigate, phoneId]);

  useEffect(() => {
    if (phone) {
      const allPhones = data.filter(el => el.id.includes('apple-iphone-11-pro-max'));

      const findPhone = allPhones.find(
        el => el.id === `apple-iphone-11-pro-max-${capacity.toLowerCase()}-${color}`,
      );

      navigate(`/phones/${findPhone?.id}`);

      if (findPhone) {
        SetPhone(findPhone);

        if (selectImg === '') {
          SetSelectImg(findPhone.images[0]);
        }
      }
    }
  }, [capacity, color, navigate, phone, selectImg]);

  function handleSetColor(col: string) {
    SetSelectImg('');
    SetColor(col);
  }

  function handlesSetCapacity(capac: string): void {
    SetSelectImg('');
    SetCapacity(capac);
  }

  function handleFavorites(id: string | undefined): void {
    if (id) {
      SetFavorites(state => {
        const itemIndex = state.findIndex(el => el.id === id);

        if (itemIndex !== -1) {
          return state.map((item, index) =>
            index === itemIndex ? { ...item, isFavorite: !item.isFavorite } : item,
          );
        }
        return [...state, { id, isFavorite: true }];
      });
    }
  }

  function handleSelected(id: string | undefined): void {
    if (id) {
      Setselected(state => {
        const itemIndex = state.findIndex(el => el.id === id);

        if (itemIndex !== -1) {
          return state.map((item, index) =>
            index === itemIndex ? { ...item, isSelected: !item.isSelected } : item,
          );
        }
        return [...state, { id, isSelected: true }];
      });
    }
  }

  return (
    <StyledProductDetailsPage className="product-details-page">
      <StyledBackHomeButton className="cart-page__back-home-btn">
        <Icon icon={IconType.ARROW_LEFT} fill="#0F0F11" />
        <StyledSpan className="cart-page__btn-description">Back</StyledSpan>
      </StyledBackHomeButton>

      <h1 className="product-details-page__title">{phone?.name}</h1>

      <section className="product-details-page__select-phone-grid">
        <article className="product-details-page__images">
          <img
            src={`../../${selectImg}`}
            alt="main-img"
            className="product-details-page__images-main"
          />

          <div className="product-details-page__images-minis">
            {phone?.images.map(el => (
              <div
                key={el}
                className={`product-details-page__images-minis-container ${el === selectImg ? 'product-details-page__images-minis-container--selected' : ''}`}
                onClick={() => SetSelectImg(el)}
              >
                <img
                  src={`../../${el}`}
                  alt={`img ${el}`}
                  className="product-details-page__images-mini"
                />
              </div>
            ))}
          </div>
        </article>

        <article className="product-details-page__variants">
          <div className="product-details-page__variants-head-colors">
            <p className="product-details-page__variants-head-colors-title">Available colors</p>
            <p className="product-details-page__variants-head-colors-id">ID: 802390</p>
          </div>

          <div className="product-details-page__variants-colors">
            {phone?.colorsAvailable.map(col => (
              <span
                key={col}
                className={`product-details-page__variants-color product-details-page__variants-color--${col} ${col === color ? 'product-details-page__variants-color--selected' : ''}`}
                onClick={() => handleSetColor(col)}
              />
            ))}
          </div>

          <div className="product-details-page__variants-capacity">
            <p className="product-details-page__variants-capacity-title">Select capacity</p>
            <div className="product-details-page__variants-capacity-memo">
              {phone?.capacityAvailable.map(capacit => (
                <div
                  key={capacit}
                  className={`product-details-page__variants-capacity-memo-option ${capacity === capacit ? 'product-details-page__variants-capacity-memo-option--selected' : ''}`}
                  onClick={() => handlesSetCapacity(capacit)}
                >
                  {capacit}
                </div>
              ))}
            </div>
          </div>

          <div className="product-details-page__variants-shopping">
            <div className="product-details-page__variants-shopping-price">
              <p className="product-details-page__variants-shopping-price-new">
                {phone?.priceDiscount}
              </p>
              <p className="product-details-page__variants-shopping-price-old">
                {phone?.priceRegular}
              </p>
            </div>

            <div className="product-details-page__variants-shopping-add">
              <button
                className={`product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-cart ${selected.find(el => el.id === phone?.id && el.isSelected) ? 'product-details-page__variants-shopping-add-cart--selected' : ''}`}
                onClick={() => handleSelected(phone?.id)}
              >
                {selected.find(el => el.id === phone?.id && el.isSelected) ? (
                  <>Added to cart</>
                ) : (
                  <>Add to cart</>
                )}
              </button>
              <button
                className="product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-favorite"
                onClick={() => handleFavorites(phone?.id)}
              >
                {favorites.find(el => el.id === phone?.id && el.isFavorite) ? (
                  <Icon icon={IconType.FILLED_HEARTLIKE} fill="#F4BA47" />
                ) : (
                  <Icon icon={IconType.EMPTY_HEARTLIKE} fill="#0F0F11" />
                )}
              </button>
            </div>
          </div>

          <div className="product-details-page__variants-informations">
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Screen
              </p>
              <p className="product-details-page__variants-informations-card-value">
                {phone?.screen}
              </p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Resolution
              </p>
              <p className="product-details-page__variants-informations-card-value">
                {phone?.resolution}
              </p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Processor
              </p>
              <p className="product-details-page__variants-informations-card-value">
                {phone?.processor}
              </p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">RAM</p>
              <p className="product-details-page__variants-informations-card-value">{phone?.ram}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="product-details-page__details">
        <article className="product-details-page__details-about">
          <h3 className="product-details-page__details-about-title">About</h3>
          <div className="product-details-page__details-about-contents">
            {phone?.description?.map(desc => (
              <div key={desc.title} className="product-details-page__details-about-content">
                <h4 className="product-details-page__details-about-header">{desc.title}</h4>
                {desc.text.map(txt => (
                  <p key={txt} className="product-details-page__details-about-description">
                    {txt}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </article>
        <article className="product-details-page__details-techs">
          <h3 className="product-details-page__details-techs-title">Tech specs</h3>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Screen
            </p>
            <p className="product-details-page__details-techs-information-value">{phone?.screen}</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Resolution
            </p>
            <p className="product-details-page__details-techs-information-value">
              {phone?.resolution}
            </p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Processor
            </p>
            <p className="product-details-page__details-techs-information-value">
              {phone?.processor}
            </p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">RAM</p>
            <p className="product-details-page__details-techs-information-value">{phone?.ram}</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Built in memory
            </p>
            <p className="product-details-page__details-techs-information-value">
              {phone?.capacity}
            </p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Camera
            </p>
            <p className="product-details-page__details-techs-information-value">{phone?.camera}</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">Zoom</p>
            <p className="product-details-page__details-techs-information-value">{phone?.zoom}</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">Cell</p>
            <p className="product-details-page__details-techs-information-value">
              {phone?.cell.join(', ')}
            </p>
          </div>
        </article>
      </section>
    </StyledProductDetailsPage>
  );
}

export default ProductDetailsPage;
