import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" />
          <Route path="/phones" element={<PageCatalog />} />
          <Route path="/cart" element={<PageCart />} /> {/* Colocar o page CartItems */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
