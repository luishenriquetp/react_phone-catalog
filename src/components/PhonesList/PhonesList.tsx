import React from "react";
import { Phone } from "../../types/types";
import { StyledList } from "../../styles/ListStyles";

export type ProductsListProps = {
  phones: Phone[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <StyledList key={phone.id}>
          {phone.name}
          {/* {change property as needed} */}
        </StyledList>
      ))}
    </ul>
  );
};

export default ProductsList;
