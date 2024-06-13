/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef, useState } from 'react';
import StyledPageCatalog from './StyledPageCatalog.ts';
import SelectItensPerPage from './components/SelectItensPerPage/SelectItensPerPage.tsx';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Phone } from '../../types/types.ts';
import data from '../../../public/api/phones.json';

export type SelectOptions = '4' | '8' | '16' | 'all';

function PageCatalog() {
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<Phone[]>(data);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [fourButtons, setFourButtons] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const useEffectExecuted = useRef(false);

  useEffect(() => {
    setPageNumber(1);
    setButtonsNumber([]);
  }, [quantityPerPage]);

  useEffect(() => {
    if (buttonsNumber.length < 4) {
      const count = 1;
      const arr = [];

      for (let i = count; i < buttonsNumber.length; i += 1) {
        arr.push(i);
      }
      setFourButtons(arr);

      return;
    }

    if (buttonsNumber.length > 4) {
      let count = 1;
      const arr = [];

      if (pageNumber === buttonsNumber[buttonsNumber.length - 1]) {
        return;
      }

      if (fourButtons[0] === 1 && pageNumber === 1) {
        return;
      }

      if (fourButtons[1] === pageNumber || fourButtons[2] === pageNumber) {
        count = pageNumber;
        return;
      }

      if (fourButtons[3] === pageNumber) {
        count = pageNumber - 2;
      }

      if (fourButtons[0] === pageNumber) {
        count = pageNumber - 1;
      }

      for (let i = count; i < count + 4; i += 1) {
        arr.push(i);
      }
      setFourButtons(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonsNumber, buttonsNumber.length, pageNumber]);

  useEffect(() => {
    setButtonsNumber([]);

    if (!useEffectExecuted.current) {
      useEffectExecuted.current = true;
      return;
    }

    const tryToChangeToNumber = Number(quantityPerPage);
    if (!Number.isNaN(tryToChangeToNumber)) {
      const possiblePerPage = Math.ceil(data.length / Number(quantityPerPage));

      const newArr = [];
      let cont = 0;

      for (let i = 0; i < possiblePerPage; i += 1) {
        newArr.push(data.slice(cont, Number(quantityPerPage) + cont));
        cont += Number(quantityPerPage);

        setButtonsNumber(state => [...state, i + 1]);
      }

      setContentPage(newArr[pageNumber - 1]);
    } else {
      setContentPage(data);
    }
  }, [quantityPerPage, pageNumber]);

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
        {contentPage && contentPage.map(item => <ProductCard phone={item} />)}
      </div>

      <div className="pagination">
        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === 1 || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => setPageNumber(state => state - 1)}
        >
          &lt;
        </button>

        {fourButtons.map(number => (
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
