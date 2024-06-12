import React, { useState, useRef, useEffect } from 'react';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';

interface Image {
  id: number;
  content: string;
}

const images: Image[] = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (event: TouchEvent) => {
    startX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!startX.current) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX.current - currentX;

    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }

    startX.current = null;
  };

  useEffect(() => {
    const sliderElement = document.querySelector('.home-page__banner-structure-slider');
    sliderElement?.addEventListener('touchstart', handleTouchStart as EventListener);
    sliderElement?.addEventListener('touchmove', handleTouchMove as EventListener);

    return () => {
      sliderElement?.removeEventListener('touchstart', handleTouchStart as EventListener);
      sliderElement?.removeEventListener('touchmove', handleTouchMove as EventListener);
    };
  });

  return (
    <StyledHomePage className="home-page" data-current-index={currentIndex}>
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <div className="home-page__banner">
        <div className="home-page__banner-structure">
          <button onClick={handlePrev} type="button" className="home-page__banner-structure-button">
            &lt;
          </button>
          <div className="home-page__banner-structure-slider" data-current-index={currentIndex}>
            {images.map((item, index) => (
              <li
                key={item.id}
                className={`home-page__banner-structure-slider-image ${index === currentIndex ? '--active' : ''}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                {item.content}
              </li>
            ))}
          </div>
          <button onClick={handleNext} type="button" className="home-page__banner-structure-button">
            &gt;
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
        <h2 className="home-page__sliders-container-title">Brand new models</h2>
        <div className="home-page__sliders-container-content">Slider</div>
      </div>
      <div className="home-page__shop">
        <div className="home-page__shop-title">Shop by category</div>
        <div className="home-page__shop-container">
          <SelectCategory />
          <SelectCategory />
          <SelectCategory />
        </div>
      </div>
      <div className="home-page__sliders-container">
        <h2 className="home-page__sliders-container-title">Hot prices</h2>
        <div className="home-page__sliders-container-content">Slider</div>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
