import React from 'react';
import { StyledSelectItensPerPage } from './StyledSelectItensPerPage';
import { SelectOptions } from '../../PageCatalog';

type Props = {
  quantityPerPage: string | number;
  setQuantityPerPage: React.Dispatch<React.SetStateAction<SelectOptions | string>>;
};

function SelectItensPerPage({ quantityPerPage, setQuantityPerPage }: Props) {
  return (
    <StyledSelectItensPerPage
      className="select__box"
      value={quantityPerPage}
      onChange={e => setQuantityPerPage(e.target.value)}
    >
      <option value={4}>4</option>
      <option value={8}>8</option>
      <option value={16}>16</option>
      <option value="all">All</option>
    </StyledSelectItensPerPage>
  );
}

export default SelectItensPerPage;
