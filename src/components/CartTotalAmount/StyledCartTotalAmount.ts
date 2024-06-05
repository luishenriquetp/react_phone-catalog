import styled from 'styled-components';

export const StyledCartTotalAmount = styled.div`
  background-color: var(--rstyle1-gray-background);
  border-radius: 16px;
  width: 286px;
  height: 190px;
  border: 1px solid #e2e6e9;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 592px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 368px;
    height: 204px;
    flex-direction: row;
  }
`;

export const StyledCartTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 16px;
`;

export const StyledTitle = styled.p`
  margin: 0;
  //styleName: Desktop & Tablet/H2;
  font-family: Mont;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--rstyle1-primary);
`;

export const StyledQuantitySpan = styled.span`
  //styleName: Body text 14;
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;

  color: var(--rstyle1-gray-secondary);
`;

export const StyledLine = styled.hr`
  width: 240px;
  height: 0px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  background-color: var(--rstyle1-gray-background);
`;

export const StyledCheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 48px;
  background-color: var(--rstyle1-accent);
  border-radius: 16px;
  border: none;
  color: #fff;
  margin: 0 auto 16px;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 544px;
    flex-direction: row;
  }

  &:hover {
    cursor: pointer;
  }
`;
