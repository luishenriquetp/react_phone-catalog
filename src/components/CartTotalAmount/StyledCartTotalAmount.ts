import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH2DesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartTotalAmount = styled.div`
  background-color: var(--rstyle1-gray-background);
  border-radius: 16px;
  width: 286px;
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
    height: 204px;
  }

  .line {
    width: 238px;
    height: 0px;
    gap: 0px;
    opacity: 0px;
    margin: 16px 0;

    color: var(--rstyle1-gray-elements);
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
    width: 240px;
    height: 48px;
    background-color: var(--rstyle1-accent);
    border-radius: 48px;
    border: none;
    color: #fff;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 544px;
      flex-direction: row;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledCartTotalAmount;
