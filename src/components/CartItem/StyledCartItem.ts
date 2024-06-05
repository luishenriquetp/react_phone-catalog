import styled from 'styled-components';

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border: 1px solid #e2e6e9;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  width: 254px;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 558px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 718px;
    flex-direction: row;
  }
`;

export const StyledTopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const StyledDeleteProductButton = styled.img`
  filter: invert(86%) sepia(10%) saturate(193%) hue-rotate(161deg) brightness(87%) contrast(90%);
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledProductImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledDescription = styled.p`
  margin: 0;
  padding: 0;
  width: 128px;
  //styleName: Body text 14;
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;

  color: var(--rstyle1-primary);

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 176px;
  }
`;

export const StyledBottomContent = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 640px) and (max-width: 1199px) {
    justify-content: center;
    gap: 24px;
  }
`;

export const StyledCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledCountButton = styled.button`
  filter: invert(82%) sepia(3%) saturate(553%) hue-rotate(161deg) brightness(91%) contrast(94%);
  border: 1px solid #b4bdc3;
  background-color: transparent;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
  margin: 0;

  &:disabled {
    filter: invert(73%) sepia(13%) saturate(154%) hue-rotate(161deg) brightness(101%) contrast(91%);
    border: 1px solid lightgray;
    opacity: 0.5;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCountNumber = styled.span`
  margin-inline: 13px;
`;

export const StyledTotalPrice = styled.span`
  //styleName: Desktop & Tablet/H3;
  font-family: Mont;
  font-size: 22px;
  font-weight: 800;
  line-height: 30.8px;
  text-align: left;
  color: var(--rstyle1-primary);
`;
