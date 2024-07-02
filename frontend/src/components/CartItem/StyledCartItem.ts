import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH3DesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--rstyle1-gray-elements);
  background-color: #fff;
  width: 254px;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 558px;
    height: 94px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1200px) {
    width: 718px;
    flex-direction: row;
    justify-content: space-around;
  }

  .cart-item__top-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .cart-item__remove-btn {
    background-color: transparent;
    border: none;
    height: 16px;

    &:hover {
      cursor: pointer;
    }
  }

  .top-content__product-image {
    width: 80px;
    height: 80px;
  }

  .top-content__product-title {
    ${letterStyleBodyTextDesktoAndTable};
    width: 128px;
  }

  .cart-item__bottom-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    @media (min-width: 640px) and (max-width: 1199px) {
      gap: 24px;
      margin: 0;
    }

    @media (min-width: 1200px) {
      width: 752px;
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .bottom-content__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }

  .bottom-content__quantity {
    ${letterStyleBodyTextDesktoAndTable};
  }

  .bottom-content__counter-btn {
    width: 32px;
    height: 32px;
    border: 1px solid var(--rstyle1-gray-icons-placeholders);
    background-color: transparent;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      border: 1px solid var(--rstyle1-gray-elements);
      cursor: not-allowed;
    }
  }

  .bottom-content__total-price {
    ${letterStyleH3DesktoAndTable}
  }
`;

export default StyledCartItem;
