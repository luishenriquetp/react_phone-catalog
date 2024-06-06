import styled from 'styled-components';
import { letterStyleH2Mobile } from '../../styles/GlobalStyles.ts';

const StyledProductDetailsPage = styled.div`
  .product-details-page {
    &__title {
      margin: 0;
      ${letterStyleH2Mobile}
    }
  }
`;

export default StyledProductDetailsPage;
