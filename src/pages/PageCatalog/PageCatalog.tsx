/* eslint-disable consistent-return */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledPageCatalog from './StyledPageCatalog.ts';
import SelectItensPerPage from './components/SelectItensPerPage/SelectItensPerPage.tsx';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { getProducts } from '../../api/getAll.ts';

export type SelectOptions = '4' | '8' | '16' | 'all';

function PageCatalog() {
  const { category } = useParams();
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<Product[]>([]);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [renderedData, setRenderedData] = useState<Product[]>([]);
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

  useEffect(() => {
    getProducts().then(fetchedData => {
      const filteredData = fetchedData.filter(e => e.category === category);
      setRenderedData(filteredData);
    });
  }, [category]);

  if (renderedData.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <StyledPageCatalog className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">Mobile Phones</h1>
        <h2 className="top-section__subtitle">95 models</h2>
      </div>
      <div className="select">
        <div className="select__wrapper">
          <h1 className="select__label">Sort By</h1>
          <select className="select__box select__box--selected">
            <option>Newest</option>
            <option>Alphabetically</option>
            <option>Cheapest</option>
          </select>
        </div>
        <div className="select__wrapper">
          <h1 className="select__label">Items on page</h1>

          <SelectItensPerPage
            quantityPerPage={quantityPerPage}
            setQuantityPerPage={setQuantityPerPage}
          />
        </div>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
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
