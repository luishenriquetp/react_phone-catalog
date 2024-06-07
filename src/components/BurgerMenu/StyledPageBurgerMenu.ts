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

      &-link {
        cursor: pointer;
        position: relative;
        padding-bottom: 8px;

        &:hover {
          color: #313237;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #313237;
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }
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
        cursor: pointer;
        display: flex;
        height: 100%;
        width: 50%;
        justify-content: center;
        align-items: center;
        padding: 24px 0;
        position: relative;

        &:first-child {
          border-right: 1px solid #e2e6e9;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #313237;
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;

export default StyledPageBurgerMenu;
