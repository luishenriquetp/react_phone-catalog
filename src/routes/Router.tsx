import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTemplate from '../pages/PageTemplate/PageTemplate.tsx';
import CartPage from '../pages/CartPage/CartPage.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />} />
      <Route path="cart" element={<CartPage />} />
      {/* Add all Routes here */}
    </Routes>
  );
}

export default Router;
