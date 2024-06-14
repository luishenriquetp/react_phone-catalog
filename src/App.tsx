import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { useAppDispatch } from './context/hooks.ts';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import { setUserSession } from './context/userContext/userSlice.ts';
import { updateAllProducs } from './context/cartContext/cartSlice.ts';
import { getSessionData } from './api/getAll.ts';
import { updateAllFavourites } from './context/favoriteContext/favouriteSlice.ts';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';

function App(): React.ReactNode {
  // Initialize Redux Data Context
  const dispatch = useAppDispatch();

  // This suppossed to be after login process
  dispatch(setUserSession('038mxc'));

  const [activeMenu, setActiveMenu] = useState(false);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getSessionData('038mxc').then(data => {
      /* const {
          cartData: {
            productsInCart: products,
            quantity: qtd,
            outra: var,
          },
          favorites
        } = data.data; */
      const dataToCart = {
        products: data.data.cartData.productsInCart,
        qtd: data.data.cartData.quantityOfProducts,
        totalAmount: data.data.cartData.totalAmount,
      };
      dispatch(updateAllProducs(dataToCart));
      dispatch(updateAllFavourites(data.data.favorites));
      setLoadingUserData(true);
    });
  }, [dispatch]);

  return (
    <div id="App">
      {location.pathname !== '/login' && (
        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      )}
      {loadingUserData && (
        <div className="container">
          {location.pathname !== '/' && location.pathname !== '/login' && <Breadcrumb />}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="shop/:category">
              <Route index element={<PageCatalog />} />
              <Route path=":categoryId" element={<ProductDetailsPage />} />
            </Route>
            <Route path="/cart" element={<PageCart />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/mobileMenu" element={<BurgerMenu />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      )}

      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;
