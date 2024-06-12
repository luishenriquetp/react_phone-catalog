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

        @media (min-width: 640px) {
          justify-content: space-between;
          align-items: center;
        }

        &-button {
          display: none;

          @media (min-width: 640px) {
            display: block;
            width: 32px;
            height: 189px;
            background-color: var(--rstyle1-gray-white);
            border: 1px solid var(--rstyle1-gray-icons-placeholders);
            color: var(--rstyle1-primary);
            border-radius: 48px;
            box-sizing: border-box;
            cursor: pointer;
          }

          @media (min-width: 1199px) {
            height: 400px;
          }
        }

        &-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
          transform: translateX(
            ${({ 'data-current-index': currentIndex }) => `-${currentIndex * 100}%`}
          );
          overflow: clip;
          background-color: red;
          margin-inline: 19px;

          &-image {
            flex: 0 0 100%;
            list-style: none;
            width: 100vw;
            height: 100vw;
            display: flex;
            align-content: center;

            @media (min-width: 640px) {
              width: 490px;
              height: 189px;
              border-radius: 8px 0px 0px 0px;
              cursor: pointer;
            }
            @media (min-width: 1200px) {
              width: 1040px;
              height: 400px;
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

      &__sliders-container-title {
        ${letterStyleH2Mobile};
        margin-bottom: 24px;

        @media (min-width: 640px) {
          ${letterStyleH2DesktoAndTable};
        }
      }

      &--second-child {
        margin-bottom: 64px;

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
