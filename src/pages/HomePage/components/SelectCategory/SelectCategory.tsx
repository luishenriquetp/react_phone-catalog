import React from 'react';
import StyledSelectCategory from './StyledSelectCategory.ts';

function SelectCategory(): React.ReactNode {
  return (
    <StyledSelectCategory className="category">
      <img
        className="category__image"
        id="phones"
        // eslint-disable-next-line no-octal-escape
        src="public\img\phones\apple-iphone-7\black\00.webp"
        alt="Phones"
      />
      <div className="category__name">Mobile Phone</div>
      <div className="category__amount">95 models</div>
    </StyledSelectCategory>
  );
}

export default SelectCategory;
