import styled from 'styled-components';

export const StyledCartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 56px;

  @media (min-width: 1200px) {
    align-items: flex-start;
    margin-inline: 32px;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }
`;

export const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
