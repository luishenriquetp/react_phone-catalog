import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH2DesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartTotalAmount = styled.div`
  background-color: var(--rstyle1-gray-background);
  border-radius: 16px;
  width: 100%;
  height: 190px;
  border: 1px solid #e2e6e9;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    height: 204px;
  }

  .line {
    width: 100%;
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
    height: 48px;
    width: 100%;
    background-color: var(--rstyle1-accent);
    border-radius: 48px;
    border: none;
    color: #fff;

    @media (min-width: 640px) and (max-width: 1199px) {
      flex-direction: row;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export default StyledCartTotalAmount;
