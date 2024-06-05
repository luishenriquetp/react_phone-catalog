import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTemplate from '../pages/PageTemplate/PageTemplate.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />} />
      {/* Add all Routes here */}
    </Routes>
  );
}

export default Router;
