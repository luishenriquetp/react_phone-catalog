import React from "react";
import { StyledLoader } from "./styledLoader";

export const Loader: React.FC = () => {
  return (
    <StyledLoader className="Loader">
      <div className="Loader__content"></div>
    </StyledLoader>
  );
};
