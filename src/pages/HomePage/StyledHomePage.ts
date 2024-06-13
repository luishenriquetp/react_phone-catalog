import styled from 'styled-components';
import {
  letterStyleH1DesktoAndTable,
  letterStyleH1Mobile,
  letterStyleH2DesktoAndTable,
  letterStyleH2Mobile,
} from '../../styles/GlobalStyles.ts';

interface StyledHomePageProps {
  'data-current-index': number;
}

const StyledHomePage = styled.div<StyledHomePageProps>`
  .home-page {
    &__title {
      ${letterStyleH1Mobile};
      padding-top: 24px;
      margin-bottom: 24px;
      margin-left: 16px;
      margin-right: 16px;

      @media (min-width: 640px) {
        ${letterStyleH1DesktoAndTable};
        margin-bottom: 32px;
        padding-top: 32px;
        margin-left: 24px;
        margin-right: 0;
      }

      @media (min-width: 1199px) {
        margin-bottom: 56px;
        padding-top: 56px;
        margin-left: 32px;
      }
    }

    &__banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 18px;
      margin-bottom: 56px;

      @media (min-width: 640px) {
        margin-bottom: 64px;
      }

      @media (min-width: 1199px) {
        margin-bottom: 80px;
      }

      &-structure {
        display: flex;
        width: 100vw;
        position: relative;

        @media (min-width: 640px) {
          width: 100%;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
        }

        &-button {
          display: none;

          @media (min-width: 640px) {
            display: block;
            width: 32px;
            height: 189px;
            margin-left: 16px;
            background-color: var(--rstyle1-gray-white);
            border: 1px solid var(--rstyle1-gray-icons-placeholders);
            color: var(--rstyle1-primary);
            border-radius: 48px;
            cursor: pointer;
          }

          @media (min-width: 1199px) {
            height: 400px;
            margin-left: 32px;
          }
        }

        &-slider {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;

          @media (min-width: 640px) {
            margin-left: 16px;
          }

          @media (min-width: 640px) {
            margin-left: 32px;
          }

          &-image {
            flex: 0 0 100%;
            list-style: none;
            width: 100vw;
            height: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 640px) {
              width: 100%;
              height: 100%;
              border-radius: 8px;
              cursor: pointer;
            }
          }
        }
      }

      &-indicators {
        display: flex;
        justify-content: center;
        gap: 9px;

        &-indicator {
          width: 14px;
          height: 4px;
          background-color: var(--rstyle1-gray-elements);

          &--active {
            background-color: var(--rstyle1-primary);
          }
        }
      }
    }

    &__sliders-container {
      margin: 0;
      margin-bottom: 56px;
      margin-left: 16px;

      @media (min-width: 640px) {
        margin-bottom: 64px;
        margin-left: 24px;
      }

      @media (min-width: 1199px) {
        margin-bottom: 80px;
        margin-left: 32px;
      }

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
      margin-top: 56px;
      margin-bottom: 56px;
      margin-left: 16px;

      @media (min-width: 640px) {
        margin-left: 24px;
      }

      @media (min-width: 1199px) {
        margin-left: 32px;
      }

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
        width: 100%;
        gap: 20px;
        overflow: hidden;

        @media (min-width: 640px) {
          flex-direction: row;
          gap: 16px;
        }
      }
    }
  }
`;

export default StyledHomePage;
