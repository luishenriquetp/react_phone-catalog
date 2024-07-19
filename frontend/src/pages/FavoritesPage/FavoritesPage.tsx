import React, { useEffect } from 'react';
import StyledFavoritesPage from './StyledFavoritesPage.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { getAllFavorites } from '../../api/getAll.ts';
import { updateAllFavourites } from '../../context/favoriteContext/favouriteSlice.ts';

function FavoritesPage(): React.ReactNode {
  const contentPage: Product[] = useAppSelector(state => state.favourites.products);
  const tokenSession = useAppSelector(state => state.user.tokenSession);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAllFavorites(tokenSession)
      .then(data => {
        dispatch(updateAllFavourites(data))
      });
  }, [])

  return (
    <StyledFavoritesPage className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">Favourites</h1>
        <h2 className="top-section__subtitle">
          {contentPage.length ? contentPage.length : 0} items
        </h2>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
      </div>
    </StyledFavoritesPage>
  );
}

export default FavoritesPage;
