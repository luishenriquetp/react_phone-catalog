import React from 'react';
import { Card, SelectWrapper, StyledPageCatalog, ListCard, TopSection, Title, Subtitle, SelectContainer, SelectLabel, Select, BottomSection, PaginationButton } from './StylePageCatalog';

// Definição de tipos
export type CardData = {
  id: number;
  title: string;
  content: string;
};

// Dados mock
const data: CardData[] = [
  { id: 1, title: "Card 1", content: "Content for card 1" },
  { id: 2, title: "Card 2", content: "Content for card 2" },
  { id: 3, title: "Card 3", content: "Content for card 3" },
  { id: 4, title: "Card 4", content: "Content for card 4" },
  { id: 5, title: "Card 5", content: "Content for card 5" },
  { id: 6, title: "Card 6", content: "Content for card 6" },
  { id: 7, title: "Card 7", content: "Content for card 7" },
  { id: 8, title: "Card 8", content: "Content for card 8" },
  { id: 9, title: "Card 9", content: "Content for card 9" },
  { id: 10, title: "Card 10", content: "Content for card 10" },
  { id: 11, title: "Card 11", content: "Content for card 11" },
  { id: 12, title: "Card 12", content: "Content for card 12" },
  { id: 13, title: "Card 13", content: "Content for card 13" },
  { id: 14, title: "Card 14", content: "Content for card 14" },
  { id: 15, title: "Card 15", content: "Content for card 15" },
  { id: 16, title: "Card 16", content: "Content for card 16" }
];

export const PageCatalog: React.FC = () => {
  return (
    <StyledPageCatalog>
      <TopSection>
        <Title>Mobile Phones</Title>
        <Subtitle>95 models</Subtitle>
      </TopSection>
      <SelectContainer>
        <SelectWrapper>
          <SelectLabel>Sort By</SelectLabel>
          <Select></Select>
        </SelectWrapper>
        <SelectWrapper>
          <SelectLabel>Items on page</SelectLabel>
          <Select></Select>
        </SelectWrapper>
      </SelectContainer>
      <ListCard>
        {data.map(item => (
          <Card key={item.id}></Card>
        ))}
      </ListCard>
      <BottomSection>
        <PaginationButton>&lt;</PaginationButton>
        <PaginationButton>1</PaginationButton>
        <PaginationButton filled>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>&gt;</PaginationButton>
      </BottomSection>
    </StyledPageCatalog>
  );
};
