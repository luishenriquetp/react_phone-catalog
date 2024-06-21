import React, { useState, useEffect } from 'react';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import { getProducts } from '../../api/getAll.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';
import Icon from '../../components/Icon/Icon.tsx';
import { IconType } from '../../components/Icon/Icon.ts';

interface Category {
  name: string;
  amount: number;
  image: string;
}

interface Image {
  id: number;
  src: string;
}

const mobileImages: Image[] = [
  { id: 1, src: '/img/banner_320px_1.png' },
  { id: 2, src: '/img/banner_320px_2.png' },
  { id: 3, src: '/img/banner_320px_3.png' },
];

const desktopImages: Image[] = [
  { id: 1, src: '/img/banner_640px_1.png' },
  { id: 2, src: '/img/banner_640px_2.png' },
  { id: 3, src: '/img/banner_640px_3.png' },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const [categories, setCategories] = useState<{ [key: string]: Category }>({});

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  return (
    <StyledHomePage id="home" className="home-page" data-current-index={currentIndex}>
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <div className="home-page__banner">
        <div className="home-page__banner-structure">
          <button
            onClick={handlePrev}
            type="button"
            className="home-page__banner-structure-button"
            aria-label="previous-btn"
          >
            <Icon icon={IconType.ARROW_LEFT} fill="black" />
          </button>
          <div
            className="home-page__banner-structure-slider"
            data-current-index={currentIndex}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((item, index) => (
              <div
                key={item.id}
                className={`home-page__banner-structure-slider-image ${index === currentIndex ? '--active' : ''}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <img src={item.src} alt={`Slide ${item.id}`} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            type="button"
            className="home-page__banner-structure-button"
            aria-label="next-btn"
          >
            <Icon icon={IconType.ARROW_RIGHT} fill="black" />
          </button>
        </div>
        <div className="home-page__banner-indicators">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`home-page__banner-indicators-indicator ${index === currentIndex ? 'home-page__banner-indicators-indicator--active' : ''}`}
            />
          ))}
        </div>
      </div>
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
              name={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              amount={category.amount}
            />
          ))}
        </div>
      </div>
      <div className="home-page__sliders-container--second-child">
        <ProductSlider title="Hot Prices" getProducts={getProducts} />
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
