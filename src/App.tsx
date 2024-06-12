import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="phones" element={<PageCatalog />} />
            <Route path="cart" element={<PageCart />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
