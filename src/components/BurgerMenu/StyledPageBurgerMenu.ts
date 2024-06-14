import styled from 'styled-components';
import { letterStyleUpperCase } from '../../styles/GlobalStyles.ts';

interface Prop {
  $favQtd: number;
  $cartQtd: number;
}

const StyledPageBurgerMenu = styled.div<Prop>`
  a {
    text-decoration: none;
    color: var(--rstyle1-gray-secondary);
  }

  .burger-menu {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: row;


    &__header {
      width: 100vw;
      height: 100px;

      &-navbar {
        background-color: #fff;
        height: 64px;
        width: 100%;
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
      gap: 16px;
      ${letterStyleUpperCase};
      color: var(--rstyle1-gray-secondary);
      width: 100%;
      margin-bottom: 20px;

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

        &:hover::after {
          width: 100%;
        }
      }

      &--fav-indicator::after {
        content: '${p => String(p.$favQtd)}';
        display: ${p => !!p.$favQtd ? 'block' : 'none'};
        color: wheat;
        text-align: center;
        position: absolute;
        right: 30%;
        bottom: 50%;
        background-color: purple;
        border-radius: 50%;
        border: 3px solid white;
        width: 20px;
        height: 20px;
      }

      &--cart-indicator::after {
        content: '${p => String(p.$cartQtd)}';
        display: ${p => !!p.$cartQtd ? 'block' : 'none'};
        color: wheat;
        text-align: center;
        position: absolute;
        right: 30%;
        bottom: 50%;
        background-color: purple;
        border-radius: 50%;
        border: 3px solid white;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default StyledPageBurgerMenu;
