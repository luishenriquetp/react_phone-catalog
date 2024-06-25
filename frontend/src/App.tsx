import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import Footer from './components/Footer/Footer.tsx';
import PageCart from './pages/CartPage/PageCart.tsx';
import Breadcrumb from './components/Breadcrumb/Breadcrumb.tsx';
import PageCatalog from './pages/PageCatalog/PageCatalog.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { useAppDispatch } from './context/hooks.ts';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import { setUserSession } from './context/userContext/userSlice.ts';
import { updateAllProducs } from './context/cartContext/cartSlice.ts';
import { getSessionData } from './api/getAll.ts';
import { updateAllFavourites } from './context/favoriteContext/favouriteSlice.ts';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import HomePageN from './pages/HomePageN/HomePageN.tsx';
import Header from './components/Header/Header.tsx';
import { Provider } from 'react-redux';
import store from './context/store.ts';


const App = React.memo(function(): React.ReactNode {


  return (
    <div id="App">
      <Provider store={store}>
        <Header />  
        <main className="container">
          <HomePageN />
        </main>
      </Provider>
      
    </div>
  );
});

export default App;
