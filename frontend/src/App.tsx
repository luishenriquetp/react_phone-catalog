import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import Header from './components/Header/Header.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';

function App(): React.ReactNode {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login';

  return (
    <div id="App">
      {!hideHeaderFooter && <Header />}

      <main className="container">
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
