import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';

function App(): React.ReactNode {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div id="App">
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="container">
        <Breadcrumb />
        <Routes>
          <Route path="/">
            <Route path="shop/:category">
              <Route index element={<PageCatalog />} />
              <Route path=":categoryId" element={<ProductDetailsPage />} />
            </Route>
          </Route>
          <Route path="/cart" element={<PageCart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
