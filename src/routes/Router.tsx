import React from 'react';
import PageCatalog from '../pages/PageCatalog/PageCatalog.tsx';
import { Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/phones" element={<PageCatalog />} />
      </Routes>
    </>
  );
};
