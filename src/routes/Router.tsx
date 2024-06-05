import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageCatalog from '../pages/PageCatalog/PageCatalog.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageCatalog />} />
      {/* Add all Routes here */}
    </Routes>
  );
}

export default Router;
