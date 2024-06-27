import styled from 'styled-components';
import {
  letterStyleH1DesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartPage = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--rstyle1-gray-background);
  gap: 16px;
  padding-inline: 32px;

  @media (min-width: 640px) {
    padding-inline: 24px;
  }

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
    gap: 0 16px;
    width: 100%;

    @media (min-width: 640px) {
      flex-direction: row;
      align-items: flex-start;
    }
    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }

  .cart-item__products-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default StyledCartPage;
