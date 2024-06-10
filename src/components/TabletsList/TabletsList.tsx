import React from "react";
import { Tablet } from "../../types/types";
import { StyledList } from "../../styles/ListStyles";

export type TabletsListProps = {
  tablets: Tablet[];
}

export const TabletsList: React.FC<TabletsListProps> = ({ tablets }) => {
  return (
    <ul>
      {tablets.map((tablet) => (
        <StyledList key={tablet.id}>
          {tablet.name}
          {/* {change property as needed} */}
        </StyledList>
      ))}
    </ul>
  );
};

export default TabletsList;
