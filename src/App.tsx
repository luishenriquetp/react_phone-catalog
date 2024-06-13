import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb />
        <Routes>
          <Route path="/">
            <Route path="shop/:category">
              <Route index element={<PageCatalog />} />
              <Route path=":categoryId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/cart" element={<PageCart />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
