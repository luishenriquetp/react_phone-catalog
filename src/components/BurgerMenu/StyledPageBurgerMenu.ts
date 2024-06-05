import styled from 'styled-components';
import { letterStyleUpperCase } from '../../styles/GlobalStyles.ts';

const StyledPageBurgerMenu = styled.div`
  .burger-menu {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-color: #ffffff;
    position: absolute;
    overflow: hidden;

    &__nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 24px;
      gap: 16px;
      ${letterStyleUpperCase};
      color: #89939a;

      position: absolute;
      width: 100%;
      height: calc(100vh - 112px);
      top: 48px;
    }

    &__link {
      cursor: pointer;

      &:hover {
        color: #313237;
        border-bottom: #313237;
      }
    }

    &__footer {
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 64px;
      border-top: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-icon {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 24px 0;

        &:first-child {
          border-right: 1px solid #e2e6e9;
        }
      }
    }
  }
`;

export default StyledPageBurgerMenu;
