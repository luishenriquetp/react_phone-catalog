import styled from 'styled-components';
import { letterStyleBodyTextDesktoAndTable } from '../../styles/GlobalStyles.ts';

const StyledDropdown = styled.div`
  .dropdown-select__display {
    border: 1px solid var(--rstyle1-gray-icons-placeholders);
    width: 136px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: relative;
    transition: border 0.3s ease;

    &:hover {
      cursor: pointer;
      border: 1px solid var(--rstyle1-gray-secondary);
    }

    &:focus {
      border: 1px solid var(--rstyle1-gray-primary);
    }

    &-title {
      ${letterStyleBodyTextDesktoAndTable};
      color: var(--rstyle1-gray-primary);
    }
  }

  .dropdown-select__options {
    position: absolute;
    border: 1px solid var(--rstyle1-gray-elements);
    background-color: #fff;
    width: 136px;
    height: 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 4px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    z-index: 2;

    &.open {
      height: 144px;
    }
  }

  .dropdown-select__option {
    margin: 0;
    border-radius: 8px;
    height: 40px;
    display: flex;
    padding-left: 12px;
    align-items: center;

    ${letterStyleBodyTextDesktoAndTable};
    color: var(--rstyle1-gray-secondary);

    &:hover {
      background-color: var(--rstyle1-gray-background);
      color: var(--rstyle1-gray-primary);
      cursor: pointer;
    }
  }
`;

export default StyledDropdown;
