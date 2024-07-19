import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH4DesktoAndTable,
} from '../../../../styles/GlobalStyles.ts';

const StyledSelectCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  cursor: pointer;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 16px;
  }

  .category {
    &-item {
      width: 100%;
    }

    &__image {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    &__name {
      ${letterStyleH4DesktoAndTable}
      margin-bottom: 4px;
    }

    &__amount {
      ${letterStyleBodyTextDesktoAndTable}
    }
  }
`;

export default StyledSelectCategory;