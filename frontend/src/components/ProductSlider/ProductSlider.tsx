import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import StyledProductSlider from './StyledProductSlider.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

interface ProductSliderProps {
  getProducts: () => Promise<Product[]>;
  title: string;
  sortBy: 'newest' | 'cheapest';
}

function ProductSlider(prop: ProductSliderProps): React.ReactNode {
  const { getProducts, title, sortBy } = prop;

  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const [products, setProducts] = useState<Product[]>([]);

  const visibleCards: number = 4;

  const isPrevDisabled = scrollIndex === 0;
  const isNextDisabled = scrollIndex >= products.length - visibleCards;

  useEffect(() => {
    getProducts().then((fetchedProducts: Product[]) => {
      if (sortBy === 'newest') {
        fetchedProducts.sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime());
      } else if (sortBy === 'cheapest') {
        fetchedProducts.sort((a, b) => a.price - b.price);
      }

      setProducts(fetchedProducts.slice(0, 20));
    });
  }, [getProducts, sortBy]);

  const handleNext = (): void => {
    if (scrollIndex < products.length - visibleCards) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = (): void => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <StyledProductSlider className="product-slider">
      <div className="product-slider__title-and-buttons">
        <h1 className="product-slider__title">{title}</h1>
        <div className="nav-buttons">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className="btn-left"
            type="button"
            aria-label="previous-btn"
          >
            <Icon
              icon={IconType.ARROW_LEFT}
              fill={isPrevDisabled ? 'grey' : 'black'}
              border
              borderColor={isPrevDisabled ? 'grey' : 'black'}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className="btn-right"
            type="button"
            aria-label="next-btn"
          >
            <Icon
              icon={IconType.ARROW_RIGHT}
              fill={isNextDisabled ? 'grey' : 'black'}
              border
              borderColor={isNextDisabled ? 'grey' : 'black'}
            />
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="cards-wrapper" style={{ transform: `translateX(-${scrollIndex * 287}px)` }}>
          {products.map(item => (
            <div key={item.id} className="slider_slide">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </StyledProductSlider>
  );
}

export default ProductSlider;
