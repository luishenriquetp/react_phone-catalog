/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledPageCatalog from './StyledPageCatalog.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { getProducts } from '../../api/getAll.ts';
import { IconType } from '../../components/Icon/Icon.ts';
import Dropdown from '../../components/Dropdown/Dropdown.tsx';

export type SelectOptions = '4' | '8' | '16' | 'all';

const categoryMapping: { [key: string]: string } = {
  'mobile-phones': 'Mobile phones',
  accessories: 'Accessories',
  tablets: 'Tablets',
};

function PageCatalog() {
  const { category } = useParams<{ category?: string }>();
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<Product[]>([]);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [renderedData, setRenderedData] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('newest');
  const useEffectExecuted = useRef(false);

  useEffect(() => {
    setPageNumber(1);
  }, []);

  useEffect(() => {
    if (renderedData.length !== 0) {
      setButtonsNumber([]);

      if (!useEffectExecuted.current) {
        useEffectExecuted.current = true;
        return;
      }

      const tryToChangeToNumber = Number(quantityPerPage);

      if (!Number.isNaN(tryToChangeToNumber)) {
        const possiblePerPage = Math.ceil(renderedData.length / Number(quantityPerPage));

        const newArr = [];
        let cont = 0;

        for (let i = 0; i < possiblePerPage; i += 1) {
          newArr.push(renderedData.slice(cont, Number(quantityPerPage) + cont));
          cont += Number(quantityPerPage);

          setButtonsNumber(state => [...state, i + 1]);
        }

        setContentPage(newArr[pageNumber - 1]);
      } else {
        setContentPage(renderedData);
      }
    }
  }, [pageNumber, quantityPerPage, renderedData]);

  function sortProducts(products: Product[], sortBy: string): Product[] {
    switch (sortBy) {
      case 'newest':
        return products.sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime());
      case 'alphabetically':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'cheapest':
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  }
  const sortOptions = [
    { label: 'Newest', value: 'newest', icon: IconType.ARROW_DOWN },
    { label: 'Alphabetically', value: 'alphabetically', icon: IconType.ARROW_DOWN },
    { label: 'Cheapest', value: 'cheapest', icon: IconType.ARROW_DOWN },
  ];

  const itemsPerPageOptions = [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' },
    { label: 'All', value: 'all' },
  ];

  useEffect(() => {
    function fetchProducts() {
      getProducts()
        .then(fetchedData => {
          const filteredData = fetchedData.filter(e => e.category === category);
          const sortedData = sortProducts(filteredData, sortOption);
          setRenderedData(sortedData);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
    fetchProducts();
  }, [category, sortOption]);

  if (renderedData.length === 0) {
    return <h1>Loading</h1>;
  }

  const categoryTitle = categoryMapping[category ?? ''] || 'Products';

  return (
    <StyledPageCatalog className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">{categoryTitle}</h1>
        <h2 className="top-section__subtitle">{renderedData.length} models</h2>
      </div>
      <div className="select">
        <div className="select__wrapper">
          <h1 className="select__label">Sort By</h1>
          <Dropdown
            options={sortOptions}
            onChange={value => setSortOption(value)}
            defaultValue="newest"
          />
        </div>
        <div className="select__wrapper">
          <h1 className="select__label">Items on page</h1>

          <Dropdown
            options={itemsPerPageOptions}
            onChange={(value: string) => setQuantityPerPage(value as SelectOptions)}
            defaultValue={4}
          />
        </div>
      </div>
      <div className="list">
        {contentPage &&
          contentPage.map(item => <ProductCard key={item.id} product={item} category={category} />)}
      </div>

      <div className="pagination">
        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === 1 || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => setPageNumber(state => state - 1)}
        >
          &lt;
        </button>

        {buttonsNumber.map(number => (
          <button
            key={number}
            type="button"
            className={`pagination__button ${pageNumber === number ? 'pagination__button--filled' : ''}`}
            onClick={() => setPageNumber(number)}
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === buttonsNumber.length || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => setPageNumber(state => state + 1)}
        >
          &gt;
        </button>
      </div>
    </StyledPageCatalog>
  );
}

export default PageCatalog;
