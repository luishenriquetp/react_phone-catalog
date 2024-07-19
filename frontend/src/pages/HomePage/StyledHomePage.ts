import styled from 'styled-components';
import {
  letterStyleH1DesktoAndTable,
  letterStyleH1Mobile,
  letterStyleH2DesktoAndTable,
  letterStyleH2Mobile,
} from '../../styles/GlobalStyles.ts';

const StyledHomePage = styled.div`
  width: 100%;
  max-width: 1136px;
  min-width: 320px;

  .home-page {
    &__title {
      ${letterStyleH1Mobile};
      padding-top: 24px;
      margin-bottom: 24px;
      margin-right: 16px;

      @media (min-width: 640px) {
        ${letterStyleH1DesktoAndTable};
        margin-bottom: 32px;
        padding-top: 32px;
        margin-right: 0;
      }

      @media (min-width: 1199px) {
        margin-bottom: 56px;
        padding-top: 56px;
      }
    }

    &__sliders-container {
      margin: 0;

      &-title {
        ${letterStyleH2Mobile};
        margin-bottom: 24px;
        @media (min-width: 640px) {
          ${letterStyleH2DesktoAndTable};
        }
      }

      &--second-child {
        margin-bottom: 64px;
        margin-left: 16px;
        @media (min-width: 640px) {
          margin-left: 24px;
        }
        @media (min-width: 1199px) {
          margin-bottom: 80px;
          margin-left: 32px;
        }
      }
    }

    &__shop {
      margin: 56px 16px;

      &-title {
        ${letterStyleH2Mobile};
        margin-bottom: 24px;
        @media (min-width: 640px) {
          ${letterStyleH2DesktoAndTable}
        }
      }

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 20px;
        @media (min-width: 640px) {
          flex-direction: row;
          gap: 16px;
        }
      }
    }
  }

  .banner {
    display: flex;
    flex-direction: column;

    &__structure {
      height: 100%;
      display: flex;
      gap: 0 16px;
      justify-content: center;
      align-items: stretch;
    }

    &__button {
      display: none;

      @media (min-width: 640px) {
        display: block;
        width: 32px;
        border-radius: 48px;
        border: 1px solid var(--rstyle1-gray-icons-placeholders);
      }

      &:hover {
        background-color: var(--rstyle1-gray-icons-placeholders);
      }

      &:active {
        background-color: black;
      }
    }

    &__image-container {
      width: 100%;
      justify-content: center;
    }

    &__image {
      width: 100%;
      border-radius: 10px;
    }

    &__indicators {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__indicators {
      display: flex;
      justify-content: center;
      gap: 9px;
      margin-top: 18px;

      @media (min-width: 640px) {
        margin-top: 16px;
      }
    }

    &__indicator {
      width: 14px;
      height: 4px;
      background-color: var(--rstyle1-gray-elements);

      &--active {
        background-color: var(--rstyle1-gray-primary);
      }
    }
  }
`;

export default StyledHomePage;