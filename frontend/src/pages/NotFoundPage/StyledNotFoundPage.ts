import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable } from '../../styles/GlobalStyles.ts';

const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  ${letterStyleBodyTextDesktoAndTable};

  .wrapper {
    width: 380px;
    height: auto;
  }
`;

export default StyledNotFound;
