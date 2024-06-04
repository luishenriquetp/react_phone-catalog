import styled from "styled-components";



export const StyledPageCatalog = styled.div`

`;

export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 249px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 120px;

  @media (min-width: 640px) {
    padding-top: 288px;
    padding-right: 24px;
    padding-left: 24px;
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    padding-top: 288px;
    padding-left: 24px; 
    padding-right: 24px; 
    gap: 16px;
  }

  @media (min-width: 1200px) {
    padding-top: 288px;
    padding-right: 32px;
    padding-left: 32px;
    padding-bottom: 152px;
  }
`;

export const Card = styled.div`
  flex: 1 0 100%;
  width: 287px;
  height: 440px;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 640px) {
    flex: 1 0 calc(50% - 16px);
    width: 288px;
    height: 506px;
  }

  @media (min-width: 768px) {
    flex: 1 0 calc(33.3% - 16px);
    width: 229px;
    height: 506px;
  }

  @media (min-width: 1200px) {
    flex: 1 0 calc(25% - 16px);
    width: 272px;
    height: 506px;
  }
`;

export const CardTitle = styled.h2`
  margin-top: 0;
`;

export const CardContent = styled.p`
  margin-bottom: 0;
`;

export const TopSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const SelectContainer = styled.div`
  width: calc(50% - 8px); /* 50% do espaço menos a margem entre os selects */
  margin-bottom: 16px;
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Select = styled.select`
  width: 100%;
  height: 32px;
  font-size: 14px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ filled?: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${props => (props.filled ? '#000' : '#fff')};
  color: ${props => (props.filled ? '#fff' : '#000')};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.filled ? '#000' : '#f0f0f0')};
  }
`;
