import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleH4DesktoAndTable,
} from '../../../../styles/GlobalStyles.ts';

const StyledSelectCategory = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-left: 16px;

  .category {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    margin-left: 16px;

    &__image {
      width: 288px;
      height: 288px;
      top: 1223px;
      left: 16px;
      border-radius: 8px 0px 0px 0px;
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
