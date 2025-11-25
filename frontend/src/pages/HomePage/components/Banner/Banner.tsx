import React, { useState, useEffect } from 'react';
import Icon from '../../../../components/Icon/Icon.tsx';
import { IconType } from '../../../../components/Icon/Icon.ts';
import StyledBanner from './StyledBanner.ts';

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

function Banner(): React.ReactNode {
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

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
    <StyledBanner className="banner">
      <div className="banner__structure">
        <button
          onClick={handlePrev}
          type="button"
          className="banner__button"
          aria-label="previous-btn"
        >
          <Icon icon={IconType.ARROW_LEFT} fill="black" />
        </button>
        <div
          className="banner__image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((item, index) => (
            <img
              key={item.id}
              src={item.src}
              alt={`Slide ${item.id}`}
              className={`banner__image ${index === currentIndex ? '--active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <button onClick={handleNext} type="button" className="banner__button" aria-label="next-btn">
          <Icon icon={IconType.ARROW_RIGHT} fill="black" />
        </button>
      </div>

      <div className="banner__indicators">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`banner__indicator ${index === currentIndex ? 'banner__indicator--active' : ''}`}
          />
        ))}
      </div>
    </StyledBanner>
  );
}

export default Banner;