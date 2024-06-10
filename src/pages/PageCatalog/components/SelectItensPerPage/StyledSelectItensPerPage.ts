import styled from 'styled-components';
import { letterStyleButtonsDesktoAndTable } from '../../../../styles/GlobalStyles.ts';

const StyledSelectItensPerPage = styled.select`
  width: 136px;
  height: 40px;
  ${letterStyleButtonsDesktoAndTable};
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #b4bdc3;
  box-sizing: border-box;
`;

export default StyledSelectItensPerPage;
