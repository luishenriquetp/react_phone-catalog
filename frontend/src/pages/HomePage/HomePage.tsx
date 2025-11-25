import React from 'react';
import { getHotPrices, getNewestModels } from '../../api/getAll.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import Banner from './components/Banner/Banner.tsx';

function HomePage(): React.ReactNode {
  return (
    <StyledHomePage className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Banner />
      <div className="home-page__sliders-container">
        <ProductSlider title="Brand New Models" getProducts={getNewestModels} />
      </div>
      <div className="home-page__shop">
        <div className="home-page__shop-title">Shop by category</div>
        <div className="home-page__shop-container">
          <SelectCategory />
        </div>
      </div>
      <div className="home-page__sliders-container">
        <ProductSlider title="Hot prices" getProducts={getHotPrices} />
      </div>
    </StyledHomePage>
  );
}

export default HomePage;