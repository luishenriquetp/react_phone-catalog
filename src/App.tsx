import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Header from './components/Header/Header.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="/phones">
              <Route index element={<PageCatalog />} />
              <Route path=":phoneId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/cart" element={<PageCart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
