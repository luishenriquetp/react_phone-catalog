import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH4DesktoAndTable,
} from '../../../../styles/GlobalStyles.ts';

const StyledSelectCategory = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 640px) {
    width: 100%;
  }

  .category {
    &__image {
      border-radius: 8px;
      margin-bottom: 24px;

      @media (min-width: 640px) {
        width: 100%;
        height: 100%;
      }

      @media (min-width: 1199px) {
        width: 100%;
        height: 100%;
      }
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
