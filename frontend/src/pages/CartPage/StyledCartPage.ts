import styled from 'styled-components';
import {
  letterStyleH1DesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledCartPage = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0;
  display: flex;

  flex-direction: column;
  background-color: var(--rstyle1-gray-background);
  gap: 16px;

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
    margin: 24px 16px 32px;
  }

  .cart-item__products-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;

    @media (min-width: 1200px) {
      flex-direction: row;
      justify-content: center;
      align-items: start;
    }
  }

  .cart-item__products-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-height: 400px;
    overflow: hidden auto;
    width: fit-content;
    border: 1px solid var(--rstyle1-gray-elements);
    border-radius: 10px;
  }

  .cart-item__products-content::-webkit-scrollbar {
    width: 10px;
  }

  .cart-item__products-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  .cart-item__products-content::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .cart-item__products-content::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default StyledCartPage;
