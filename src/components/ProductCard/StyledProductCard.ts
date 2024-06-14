import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH3DesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

export const StyledProductCard = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e2e6e9;
  border-radius: 8px;
  width: 272px;
  height: 440px;
  padding-bottom: 32px;

  @media (min-width: 768px) {
    width: 229px;
    height: 506px;
  }

  @media (min-width: 1200px) {
    width: 272px;
  }

  .product-card__link {
    text-decoration: none;
    padding-inline: 32px;
    padding-top: 32px;
    color: var(--rstyle1-gray-primary);
    &:hover {
      cursor: pointer;
    }
  }

  .product-card__wrapper {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }

  .product-card__image {
    width: 100%;
    height: 150px;
    object-fit: contain;
    transition: transform 500ms;

    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: 768px) {
      height: 190px;
    }
  }

  .product-card__description {
    display: flex;
    flex-direction: column;
  }

  .product-card__description-title {
    ${letterStyleBodyTextDesktoAndTable}
    margin: 0;
    margin-bottom: 8px;

    color: var(--rstyle1-gray-primary);
  }

  .product-card__description-price-wrapper {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
  }

  .product-card__description-price-discount {
    ${letterStyleH3DesktoAndTable}
    margin: 0;
    width: 51px;

    color: var(--rstyle1-gray-primary);
  }
  .product-card__description-price {
    font-family: Mont;
    font-size: 22px;
    font-weight: 600;
    line-height: 28.12px;
    text-align: left;
    text-decoration: line-through;

    margin: 0;
    width: 51px;

    color: var(--rstyle1-gray-secondary);
  }

  .product-card__custom-line {
    border: 1px solid var(--rstyle1-gray-elements);
    margin: 8px 0;
  }

  .product-card__details-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    justify-content: space-evenly;
    gap: 8px;
  }

  .product-card__details-screen {
    display: flex;
    justify-content: space-between;

    @media (min-width: 640px) and (max-width: 1199px) {
    }
  }

  .product-card__details-capacity {
    display: flex;
    justify-content: space-between;
  }

  .product-card__details-ram {
    display: flex;
    justify-content: space-between;
  }

  .product-card__details-title {
    ${letterStyleSmallTextDesktoAndTable}
    color: var(--rstyle1-gray-secondary);
    display: flex;
    flex-direction: column;
    padding: 2px 0;
  }

  .product-card__details-description {
    // theres no typo on figma
    font-family: Mont;
    font-size: 12px;
    font-weight: 700;
    line-height: 15.34px;
    text-align: right;
    padding: 2px 0;
    color: var(--rstyle1-gray-primary);
    width: 90px;
  }

  .product-card__btn-container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-inline: 32px;
    justify-content: space-between;
  }

  .product-card__btn {
    // theres no typo on figma
    height: 40px;
    width: 100%;
    border-radius: 48px;
    background-color: var(--rstyle1-accent);
    border: none;
    color: #fff;
    text-align: center;
    padding: 0;

    //styleName: Buttons;
    font-family: Mont;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    text-align: center;
    transition: box-shadow 300ms;

    &--clicked {
      height: 40px;
      width: 100%;
      background-color: transparent;
      color: var(--rstyle1-accent);
      border-radius: 48px;
      border: 1px solid var(--rstyle1-gray-elements);
      text-align: center;
      padding: 0;

      //styleName: Buttons;
      font-family: Mont;
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      text-align: center;
      transition: box-shadow 300ms;

      &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 13px 0px #17203166;
      }
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 3px 13px 0px #17203166;
    }
  }

  .product-card__btn-favorite {
    display: flex;
    justify-content: center;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid var(--rstyle1-gray-icons-placeholders);
    padding: 10px;
    margin: 0;
    transition: color 500ms;

    &:hover {
      cursor: pointer;
    }

    &--clicked {
      display: flex;
      justify-content: center;
      background-color: transparent;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--rstyle1-gray-icons-placeholders);
      padding: 10px;
      margin: 0;
      color: var(--rstyle1-secondary-accent);
    }
  }
`;

export default StyledProductCard;
