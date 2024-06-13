import React, { useState, useEffect } from 'react';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import { Accessorie, Phone, Tablet } from '../../types/types.ts';

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

export const getAccessories = (): Promise<Accessorie[]> => {
  return fetch('api/accessories.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch accessories: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Accessorie[])
    .catch(error => {
      throw error;
    });
};

export const getPhones = (): Promise<Phone[]> => {
  return fetch('api/phones.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch phones: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Phone[])
    .catch(error => {
      throw error;
    });
};

export const getTablets = (): Promise<Tablet[]> => {
  return fetch('api/tablets.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch tablets: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Tablet[])
    .catch(error => {
      throw error;
    });
};

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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
      // Deslize para a esquerda (avançar)
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      // Deslize para a direita (retroceder)
      handlePrev();
    }
  };

  return (
    <StyledHomePage className="home-page" data-current-index={currentIndex}>
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <div className="home-page__banner">
        <div className="home-page__banner-structure">
          <button onClick={handlePrev} type="button" className="home-page__banner-structure-button">
            &lt;
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
          <SelectCategory {...getPhones} />
          <SelectCategory {...getTablets} />
          <SelectCategory {...getAccessories} />
        </div>
      </div>
      <div className="home-page__sliders-container--second-child">
        <h2 className="home-page__sliders-container-title">Hot prices</h2>
        <div className="home-page__sliders-container-content">Slider</div>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
