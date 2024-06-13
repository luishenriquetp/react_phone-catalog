import styled from 'styled-components';
import {
  letterStyleH3DesktoAndTable,
  letterStyleH4DesktoAndTable,
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

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 229px;
    height: 506px;
  }

  .product-card__link {
    text-decoration: none;
    color: var(--rstyle1-gray-primary);
    &:hover {
      cursor: pointer;
    }
  }

  .product-card__wrapper {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-card__image {
    width: 223px;
    height: 130px;
    object-fit: contain;
    transition: transform 500ms;

    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
      height: 196px;
    }
  }

  .product-card__description {
    display: flex;
    flex-direction: column;
  }

  .product-card__description-title {
    ${letterStyleH4DesktoAndTable}
    margin: 24px 0 8px;
    width: 223px;

    color: var(--rstyle1-gray-primary);

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
      margin: 8px 0;
    }
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
    width: 228px;
    margin: 8px 0;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
    }
  }

  .product-card__details {
    display: flex;
    gap: 100px;

    @media (min-width: 640px) and (max-width: 1199px) {
      gap: 10px;
      justify-content: space-between;
    }
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
    width: 228px;
    justify-content: space-between;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
    }
  }

  .product-card__details-capacity {
    display: flex;
    width: 228px;
    justify-content: space-between;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
    }
  }

  .product-card__details-ram {
    display: flex;
    width: 228px;
    justify-content: space-between;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 165px;
    }

    @media (min-width: 1200px) {
      width: 228px;
    }
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
  }

  .product-card__btn {
    // theres no typo on figma
    width: 175px;
    height: 40px;
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
      background-color: transparent;
      color: var(--rstyle1-accent);
      width: 175px;
      height: 40px;
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

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 117px;
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
