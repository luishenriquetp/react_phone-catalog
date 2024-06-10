/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { StyledBackHomeButton, StyledSpan } from '../CartPage/StyledCartPage.ts';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.types.ts';
import StyledProductDetailsPage from './StyledProductDetailsPage.ts';
import data from '../../../public/api/phones.json';

/*
  StyledBackHomeButton - Line 18 to 21 - probably will be a global component
*/

type Props = {};

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

const phones = data.filter(el => el.id.includes('apple-iphone-11-pro-max-64gb'));
const colors = phones.find(el => el.colorsAvailable)?.colorsAvailable;

function ProductDetailsPage({}: Props) {
  const [selectImg, SetSelectImg] = useState<string>('');
  const [phone, SetPhone] = useState<CardData | null>(null);
  const [color, SetColor] = useState<string>('');

  console.log(phone);

  useEffect(() => {
    if (color === '' && colors) {
      SetColor(colors[0]);
    }
    if (colors && phones) {
      const selectedPhone = phones.find(el => el.color === color);
      if (selectedPhone) {
        SetPhone(selectedPhone);
        if (selectImg === '') {
          SetSelectImg(selectedPhone.images[0]);
        }
      }
    }
  }, [color, selectImg]);

  function handleSetColor(col: string) {
    SetSelectImg('');
    SetColor(col);
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
              <div className="product-details-page__variants-capacity-memo-option product-details-page__variants-capacity-memo-option--selected">
                64 GB
              </div>
              <div className="product-details-page__variants-capacity-memo-option">256 GB</div>
              <div className="product-details-page__variants-capacity-memo-option">512 GB</div>
            </div>
          </div>

          <div className="product-details-page__variants-shopping">
            <div className="product-details-page__variants-shopping-price">
              <p className="product-details-page__variants-shopping-price-new">$799</p>
              <p className="product-details-page__variants-shopping-price-old">$1199</p>
            </div>

            <div className="product-details-page__variants-shopping-add">
              <button className="product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-cart">
                Add to cart
              </button>
              <button className="product-details-page__variants-shopping-add-btn product-details-page__variants-shopping-add-favorite">
                <Icon icon={IconType.EMPTY_HEARTLIKE} fill="#0F0F11" />
              </button>
            </div>
          </div>

          <div className="product-details-page__variants-informations">
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Screen
              </p>
              <p className="product-details-page__variants-informations-card-value">6.5” OLED</p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Resolution
              </p>
              <p className="product-details-page__variants-informations-card-value">2688x1242</p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">
                Processor
              </p>
              <p className="product-details-page__variants-informations-card-value">
                Apple A12 Bionic
              </p>
            </div>
            <div className="product-details-page__variants-informations-card">
              <p className="product-details-page__variants-informations-card-especification">RAM</p>
              <p className="product-details-page__variants-informations-card-value">3 GB</p>
            </div>
          </div>
        </article>
      </section>

      <section className="product-details-page__details">
        <article className="product-details-page__details-about">
          <h3 className="product-details-page__details-about-title">About</h3>
          <div className="product-details-page__details-about-contents">
            <div className="product-details-page__details-about-content">
              <h4 className="product-details-page__details-about-header">And then there was Pro</h4>
              <p className="product-details-page__details-about-description">
                A transformative triple‑camera system that adds tons of capability without
                complexity.
              </p>

              <p className="product-details-page__details-about-description">
                An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on
                machine learning and pushes the boundaries of what a smartphone can do. Welcome to
                the first iPhone powerful enough to be called Pro.
              </p>
            </div>
            <div className="product-details-page__details-about-content">
              <h4 className="product-details-page__details-about-header">Camera</h4>
              <p className="product-details-page__details-about-description">
                Meet the first triple‑camera system to combine cutting‑edge technology with the
                legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful
                images in drastically lower light. Shoot the highest‑quality video in a smartphone —
                then edit with the same tools you love for photos. You’ve never shot with anything
                like it.
              </p>
            </div>
            <div className="product-details-page__details-about-content">
              <h4 className="product-details-page__details-about-header">
                Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
              </h4>
              <p className="product-details-page__details-about-description">
                iPhone 11 Pro lets you capture videos that are beautifully true to life, with
                greater detail and smoother motion. Epic processing power means it can shoot 4K
                video with extended dynamic range and cinematic video stabilization — all at 60 fps.
                You get more creative control, too, with four times more scene and powerful new
                editing tools to play with.
              </p>
            </div>
          </div>
        </article>
        <article className="product-details-page__details-techs">
          <h3 className="product-details-page__details-techs-title">Tech specs</h3>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Screen
            </p>
            <p className="product-details-page__details-techs-information-value">6.5” OLED</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Resolution
            </p>
            <p className="product-details-page__details-techs-information-value">2688x1242</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Processor
            </p>
            <p className="product-details-page__details-techs-information-value">
              Apple A12 Bionic
            </p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">RAM</p>
            <p className="product-details-page__details-techs-information-value">3 GB</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Built in memory
            </p>
            <p className="product-details-page__details-techs-information-value">64 GB</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">
              Camera
            </p>
            <p className="product-details-page__details-techs-information-value">
              12 Mp + 12 Mp + 12 Mp (Triple)
            </p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">Zoom</p>
            <p className="product-details-page__details-techs-information-value">Optical, 2x</p>
          </div>
          <div className="product-details-page__details-techs-information">
            <p className="product-details-page__details-techs-information-especifications">Cell</p>
            <p className="product-details-page__details-techs-information-value">GSM, LTE, UMTS</p>
          </div>
        </article>
      </section>
    </StyledProductDetailsPage>
  );
}

export default ProductDetailsPage;
