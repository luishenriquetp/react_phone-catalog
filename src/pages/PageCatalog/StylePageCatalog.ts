import styled from "styled-components";
import { letterStyleH1Mobile, letterStyleBodyTextDesktoAndTable, letterStyleSmallTextDesktoAndTable, letterStyleButtonsDesktoAndTable } from "../../styles/GlobalStyles";

export const StyledPageCatalog = styled.div`
`;

export const ListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-left: 16px;
  padding-right: 16px;
  
  @media (min-width: 640px) {
    padding-right: 24px;
    padding-left: 24px;
    gap: 16px;
  }
  
  @media (min-width: 1200px) {
    padding-right: 32px;
    padding-left: 32px;
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

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 640px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  
  @media (min-width: 1200px) {
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  ${letterStyleH1Mobile};
`;

export const Subtitle = styled.h2`
  ${letterStyleBodyTextDesktoAndTable}
  color: #89939A;
  margin: 0;
  margin-bottom: 32px;

  @media (min-width: 640px) {
    margin-bottom: 40px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    padding-right: 24px;
    padding-left: 24px;
  }
  
  @media (min-width: 1200px) {
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 640px) {
    align-items: flex-start;
  }
`;

export const SelectLabel = styled.label`
  ${letterStyleSmallTextDesktoAndTable};
  color: #89939A;
  margin-bottom: 4px;
`;

export const Select = styled.select`
  width: 136px;
  height: 40px;
  ${letterStyleButtonsDesktoAndTable};
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #B4BDC3;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 640px) {
    margin-top: 40px;
  }
  
  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }
`;

export const PaginationButton = styled.button<{ filled?: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin: 0 8px;
  background-color: ${props => (props.filled ? '#000' : '#fff')};
  color: ${props => (props.filled ? '#fff' : '#000')};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.filled ? '#000' : '#f0f0f0')};
  }
`;
