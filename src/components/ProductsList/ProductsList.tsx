import React from "react";
import { Product } from "../../types/types";
import { StyledList } from "../../styles/ListStyles";

export type ProductsListProps = {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <StyledList key={product.id}>
          {product.name}
          {/* {change property as needed} */}
        </StyledList>
      ))}
    </ul>
  );
};

export default ProductsList;
