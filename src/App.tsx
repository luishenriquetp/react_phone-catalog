import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
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
            <Route path=":category" element={<PageCatalog />} />
            <Route path="cart" element={<PageCart />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
