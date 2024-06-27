import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api/getAll.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import Banner from './components/Banner/Banner.tsx';

interface Category {
  name: string;
  amount: number;
  image: string;
}

function HomePage(): React.ReactNode {
  const [categories, setCategories] = useState<{ [key: string]: Category }>({});

  useEffect(() => {
    getProducts().then(products => {
      const newCategories = products.reduce(
        (acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = {
              name: product.category,
              amount: 0,
              image: `/img/categories_images/${product.category}_category.png`,
            };
          }
          acc[product.category].amount += 1;
          return acc;
        },
        {} as { [key: string]: Category },
      );

      setCategories(newCategories);
    });
  }, []);

  return (
    <StyledHomePage className="home-page">
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <Banner />
      <div className="home-page__sliders-container">
        <ProductSlider title="Brand New Models" getProducts={getProducts} />
      </div>
      <div className="home-page__shop">
        <div className="home-page__shop-title">Shop by category</div>
        <div className="home-page__shop-container">
          {Object.values(categories).map(category => (
            <SelectCategory
              key={category.name}
              images={category.image}
              name={category.name}
              amount={category.amount}
            />
          ))}
        </div>
      </div>
      <div className="home-page__sliders-container">
        <ProductSlider title="Brand New Models" getProducts={getProducts} />
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
