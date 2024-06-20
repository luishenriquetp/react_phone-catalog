import React from 'react';
import { SelectOptions } from '../../PageCatalog.tsx';
import StyledSelectItensPerPage from './StyledSelectItensPerPage.ts';
import { IconType } from '../../../../components/Icon/Icon.ts';
import Icon from '../../../../components/Icon/Icon.tsx';

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
      <div className="icon-container">
        <Icon icon={IconType.ARROW_DOWN} />
      </div>
    </StyledSelectItensPerPage>
  );
}

export default SelectItensPerPage;
