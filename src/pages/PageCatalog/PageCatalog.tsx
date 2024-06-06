import { useEffect, useRef, useState } from 'react';
import StyledPageCatalog from './StyledPageCatalog.ts';
import SelectItensPerPage from './components/SelectItensPerPage/SelectItensPerPage.tsx';

export type CardData = {
  id: number;
  title: string;
  content: string;
};

export type SelectOptions = '4' | '8' | '16' | 'all';

const data: CardData[] = [
  { id: 1, title: 'Card 1', content: 'Content for card 1' },
  { id: 2, title: 'Card 2', content: 'Content for card 2' },
  { id: 3, title: 'Card 3', content: 'Content for card 3' },
  { id: 4, title: 'Card 4', content: 'Content for card 4' },
  { id: 5, title: 'Card 5', content: 'Content for card 5' },
  { id: 6, title: 'Card 6', content: 'Content for card 6' },
  { id: 7, title: 'Card 7', content: 'Content for card 7' },
  { id: 8, title: 'Card 8', content: 'Content for card 8' },
  { id: 9, title: 'Card 9', content: 'Content for card 9' },
  { id: 10, title: 'Card 10', content: 'Content for card 10' },
  { id: 11, title: 'Card 11', content: 'Content for card 11' },
  { id: 12, title: 'Card 12', content: 'Content for card 12' },
  { id: 13, title: 'Card 13', content: 'Content for card 13' },
  { id: 14, title: 'Card 14', content: 'Content for card 14' },
  { id: 15, title: 'Card 15', content: 'Content for card 15' },
];

function PageCatalog() {
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<CardData[]>([]);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const useEffectExecuted = useRef(false);


  useEffect(() => {
    setPageNumber(1);
  }, [quantityPerPage]);

  useEffect(() => {
    setButtonsNumber([]);

    if (!useEffectExecuted.current) {
      useEffectExecuted.current = true;
      return;
    }

    const tryToChangeToNumber = Number(quantityPerPage);
    if (!isNaN(tryToChangeToNumber)) {
      const possiblePerPage = Math.ceil(data.length / Number(quantityPerPage));

      const newArr = [];
      let cont = 0;

      for (let i = 0; i < possiblePerPage; i++) {
        newArr.push(data.slice(cont, Number(quantityPerPage) + cont));
        cont = cont + Number(quantityPerPage);

        setButtonsNumber(state => [...state, i + 1]);
      }
      console.log(newArr);

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
        {contentPage && contentPage.map(item => <div className="list__card" key={item.id} />)}
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
