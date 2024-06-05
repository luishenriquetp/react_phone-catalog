import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BurgerMenu />} />
      {/* Add all Routes here */}
    </Routes>
  );
}

export default Router;
