import styled from 'styled-components';

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: var(--rstyle1-gray-background);

  @media (min-width: 1200px) {
  }
`;
export const StyledBackHomeButton = styled.button`
  width: 66px;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 24px 16px;
  padding: 0;

  @media (min-width: 640px) and (max-width: 1199px) {
    margin: 40px 0 16px 24px;
  }

  @media (min-width: 1200px) {
    margin: 40px 0 16px 32px;
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
