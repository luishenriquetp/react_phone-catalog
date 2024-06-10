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

    &__header {
      width: 100vw;
      height: 100px;

      &-navbar {
        top: 0;
        background-color: #fff;
        height: 64px;
        width: 100%;
        position: fixed;
        border-bottom: 2px solid #e2e6e9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;

        &-logo {
          margin-left: 16px;
        }

        &-icon {
          display: flex;
          margin-right: 16px;
          color: #000000;
        }
      }
    }

    &__nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 72px;
      gap: 16px;
      ${letterStyleUpperCase};
      color: var(--rstyle1-gray-secondary);

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
          border-right: 1px solid var(--rstyle1-gray-elements);
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
