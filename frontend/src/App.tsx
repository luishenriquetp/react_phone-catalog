import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import Header from './components/Header/Header.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.tsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx';

function App(): React.ReactNode {
  return (
    <div id="App">
      <Header />

      <main className="container">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="shop/:category">
            <Route index element={<PageCatalog />} />
            <Route path=":categoryId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="/cart" element={<PageCart />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/mobileMenu" element={<BurgerMenu />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
