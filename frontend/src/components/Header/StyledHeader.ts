import styled from 'styled-components';
import { letterStyleUpperCase } from '../../styles/GlobalStyles.ts';

const StyledHeaderN = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px 0px #e2e6e9;
  z-index: 99;
  ${letterStyleUpperCase};

  @media (max-width: 1199px) {
    height: 48px;
    gap: 16px;
  }

  .header_logo {
    width: 64px;
    height: 22px;
    margin: 18px;
    box-sizing: border-box;

    @media (max-width: 1199px) {
      margin: 13px 16px;
    }
  }

  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 639px) {
      display: none;
    }

    &__list {
      line-height: 64px;
      list-style: none;
      display: flex;
      gap: 64px;
      margin: 0;
      padding: 0;

      @media (max-width: 1199px) {
        line-height: 48px;
        gap: 32px;
      }
    }

    &__item {
      position: relative;
      transition:
        hover,
        background-color 300ms;

      &:hover {
        cursor: pointer;
      }

      &:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: #0f0f11;
      }

      &--active ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: #0f0f11;
      }
    }

    &__link {
      height: 100%;
      text-transform: uppercase;
      color: var(--rstyle1-gray-primary);
    }
  }

  .icons-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    &__btn {
      height: 100%;
      width: 64px;
      cursor: pointer;
      box-shadow: -1px 0px 0px 0px #e2e6e9;
      position: relative;

      @media (max-width: 639px) {
        display: none;
      }

      &--indicator {
        height: 25%;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 50%;
        left: 50%;
        color: #fff;
        background-color: var(--rstyle1-accent);
        font-size: 9px;
        font-weight: 700;
        line-height: 11.5px;
        text-align: center;
        color: white;
        border-radius: 50%;
        border: 2px solid white;
      }

      &--menu-mobile {
        display: none;
      }

      &--cart {
        &--indicator {
          height: 25%;
          width: 25%;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 50%;
          left: 50%;
          background-color: purple;
          font-size: 9px;
          font-weight: 700;
          line-height: 11.5px;
          text-align: center;
          color: white;
          border-radius: 50%;
          border: 2px solid white;
        }
      }

      @media (max-width: 1199px) {
        width: 48px;
      }

      @media (max-width: 639px) {
        height: 48px;

        &--menu-mobile {
          display: block;
        }

        &--favourite {
          display: none;
        }

        &--cart {
          display: none;
        }
      }
    }
  }
`;

export default StyledHeaderN;
