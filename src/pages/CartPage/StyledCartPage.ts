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
export const StyledBackHomeButton = styled.button`
  width: 66px;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 16px;
  padding: 0;

  cursor: pointer;

  & span {
    transition-duration: 0.25s;
  }

  &:hover span {
    color: var(--rstyle1-primary);
  }

  @media (min-width: 640px) {
    margin-top: 40px;
  }
`;
export const StyledSpan = styled.span`
  //styleName: Small text 12;
  font-family: Mont;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.34px;
  text-align: left;
  color: var(--rstyle1-gray-secondary);
`;

export const StyledH1Title = styled.h1`
  //styleName: Mobile/H1;
  font-family: Mont;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.01em;
  text-align: left;
  margin: 0 0 32px 16px;
  color: var(--rstyle1-primary);

  @media (min-width: 640px) and (max-width: 1199px) {
    font-size: 48px;
    margin: 0 0 32px 24px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
    margin: 0 32px 32px;
  }
`;

export default StyledCartPage;
