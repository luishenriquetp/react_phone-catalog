import React from "react";
import { Accessorie } from "../../types/types";
import { StyledList } from "../../styles/ListStyles";

export type AccessoriesListProps = {
  accessories: Accessorie[];
}

export const AccessoriesList: React.FC<AccessoriesListProps> = ({ accessories }) => {
  return (
    <ul>
      {accessories.map((accessorie) => (
        <StyledList key={accessorie.id}>
          {accessorie.name}
          {/* {change property as needed} */}
        </StyledList>
      ))}
    </ul>
  );
};

export default AccessoriesList;
