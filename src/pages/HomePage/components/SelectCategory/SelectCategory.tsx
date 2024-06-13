import React from 'react';
import StyledSelectCategory from './StyledSelectCategory.ts';

interface CategoryProps {
  images: string;
  name: string;
  amount: number;
}

function SelectCategory(props: CategoryProps): JSX.Element {
  const { images, name, amount } = props;

  return (
    <StyledSelectCategory className="category">
      <img className="category__image" src={images} alt={name} />
      <div className="category__name">{name}</div>
      <div className="category__amount">{`${amount} models`}</div>
    </StyledSelectCategory>
  );
}

export default SelectCategory;
