import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Footer from './components/Footer/Footer.tsx';
import CartPage from './pages/CartPage/CartPage.tsx';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage.tsx';

export function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path=":category">
              <Route path=":categoryId" element={<ProductDetailsPage />}/>
            </Route>
            <Route path="cart" element={<CartPage />} />
          </Route>

          {/* Add all Routes here */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
