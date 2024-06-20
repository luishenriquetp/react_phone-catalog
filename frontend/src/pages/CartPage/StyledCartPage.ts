import styled from 'styled-components';
import {
  letterStyleH1DesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--rstyle1-gray-background);
  padding: 24px 16px 56px;
  gap: 16px;
  height: 100vh;

  .cart-items__btn {
    display: flex;
    background-color: transparent;
    border: none;
    align-items: flex-end;
    ${letterStyleSmallTextDesktoAndTable};
    gap: 4px;
  }

  .cart-item__title {
    ${letterStyleH1DesktoAndTable};
    margin: 24px 0 32px;
  }

  .cart-item__products-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-bottom: 16px;

    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  .cart-item__products-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default StyledCartPage;
