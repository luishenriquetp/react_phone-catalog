import React from "react";
import { Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/phones" element={/* Phone Comp */} />
      </Routes>
    </>
  );
};
