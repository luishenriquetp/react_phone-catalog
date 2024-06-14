import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import StyledProductSlider from './StyledProductSlider.ts';

interface ProductSliderProps {
  getProducts: () => Promise<Product[]>;
}

function ProductSlider(prop: ProductSliderProps): React.ReactNode {
  const { getProducts } = prop;

  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((fetchAddPhones: Product[]) => {
      setProducts(fetchAddPhones);
    });
  }, [getProducts]);

  const visibleCards: number = 4;

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

  const isPrevDisabled = scrollIndex === 0;
  const isNextDisabled = scrollIndex >= products.length - visibleCards;

  return (
    <StyledProductSlider>
      <div className="main-container">
        <h1>Brand New Models</h1>
        <div className="nav-buttons">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={isPrevDisabled ? 'disabled left' : 'left'}
            type="button"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={isNextDisabled ? 'disabled' : ''}
            type="button"
          >
            Next
          </button>
        </div>
        <div className="card-container">
          <div
            className="cards-wrapper"
            style={{ transform: `translateX(-${scrollIndex * 287}px)` }}
          >
            {products.map(item => (
              <div className="slider_slide">
                <ProductCard key={item.id} product={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledProductSlider>
  );
}

export default ProductSlider;
