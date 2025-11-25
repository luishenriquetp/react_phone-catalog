import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH2DesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartTotalAmount = styled.div`
  background-color: var(--rstyle1-gray-background);
  border-radius: 16px;
  width: 288px;
  height: 190px;
  border: 1px solid #e2e6e9;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 592px;
  }

  @media (min-width: 1200px) {
    width: 368px;
  }

  .line {
    width: 240px;
    height: 0px;
    margin: 16px 0;

    color: var(--rstyle1-gray-elements);

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 544px;
    }

    @media (min-width: 1200px) {
      width: 321px;
    }
  }

  .cart-total__titles {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-total__title-content {
    ${letterStyleH2DesktoAndTable}
    margin: 24px 24px 0;
  }

  .cart-total__total-quantity {
    ${letterStyleBodyTextDesktoAndTable}
    color: var(--rstyle1-gray-secondary);
  }

  .cart-total__checkout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 84%;
    background-color: var(--rstyle1-accent);
    border-radius: 48px;
    border: none;
    color: #fff;
    transition: box-shadow 300ms;

    @media (min-width: 640px) and (max-width: 1199px) {
      flex-direction: row;
      width: 95%;
    }

    @media (min-width: 1200px) {
      width: 90%;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 3px 13px 0px #17203166;
    }
  }
`;

export default StyledCartTotalAmount;
