import React from 'react';
import StyledFavoritesPage from './StyledFavoritesPage.ts';
import StyledToastContainer from '../../components/ToastContainer/StyledToastContainer.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { useAppSelector } from '../../context/hooks.ts';

function FavoritesPage(): React.ReactNode {
  const contentPage: Product[] = useAppSelector(state => state.favourites.products);

  return (
    <StyledFavoritesPage className="page-catalog">
      <StyledToastContainer />
      <div className="top-section">
        <h1 className="top-section__title">Favourites</h1>
        <h2 className="top-section__subtitle">
          {contentPage.length ? contentPage.length : ''} models
        </h2>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
      </div>
    </StyledFavoritesPage>
  );
}

export default FavoritesPage;
