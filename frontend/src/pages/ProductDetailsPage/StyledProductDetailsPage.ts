import styled from 'styled-components';
import {
  letterStyleBodyTextDesktoAndTable,
  letterStyleButtonsDesktoAndTable,
  letterStyleH1Mobile,
  letterStyleH2Mobile,
  letterStyleH3Mobile,
  letterStyleH4Mobile,
  letterStyleSmallTextDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledProductDetailsPage = styled.div`
  margin-inline: 16px;

  @media (min-width: 640px) {
    margin-inline: 24px;
  }

  @media (min-width: 1200px) {
    max-width: 1136px;
    margin: 0 auto;
  }

  .product-details-page {
    &__title {
      margin: 0;
      margin-bottom: 32px;
      ${letterStyleH2Mobile}

      @media (min-width: 640px) {
        margin-bottom: 40px;
        font-size: 32px;
      }
    }

    &__select-phone-grid {
      position: relative;
      display: grid;
      --columns: 4;
      grid-template-columns: repeat(var(--columns), 1fr);
      column-gap: 16px;

      margin-bottom: 56px;

      @media (min-width: 640px) {
        --columns: 12;
        margin-bottom: 64px;
      }

      @media (min-width: 1200px) {
        --columns: 24;
        margin-bottom: 80px;
      }
    }

    &__images {
      display: flex;
      flex-direction: column;
      gap: 16px;

      grid-column: 1 / 5;

      @media (min-width: 640px) {
        flex-direction: row-reverse;
        align-items: baseline;
        justify-content: flex-end;
        gap: 53px;

        grid-column: 1 / 7;
      }

      @media (min-width: 1200px) {
        grid-column: 1 / 13;
        gap: 76px;
      }

      &-main {
        max-width: 75%;
        align-self: center;
        max-height: 322px;

        @media (min-width: 640px) {
          align-self: flex-start;
          max-width: 75%;
        }

        @media (min-width: 768px) {
          max-height: 400px;
        }

        @media (min-width: 1200px) {
          align-self: flex-start;
          max-width: 62%;
          max-height: 500px;
        }
      }

      &-minis {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-bottom: 40px;

        @media (min-width: 640px) {
          flex-direction: column;
        }

        @media (min-width: 1200px) {
          gap: 16px;
        }

        &-container {
          display: flex;
          width: 51.2px;
          height: 49px;
          justify-content: center;
          align-items: center;
          border: 1px solid #c4c4c4;
          border-radius: 4px;
          cursor: pointer;

          @media (min-width: 640px) {
            width: 33px;
            height: 33px;
          }

          @media (min-width: 1200px) {
            border-radius: 8px;
            width: 80px;
            height: 80px;
          }

          &--selected {
            border-color: var(--rstyle1-primary);
          }
        }
      }

      &-mini {
        max-width: 90%;
        max-height: 90%;
      }
    }

    &__variants {
      display: flex;
      flex-direction: column;

      grid-column: 1 / 5;

      @media (min-width: 640px) {
        grid-column: 8 / 13;
      }

      @media (min-width: 1200px) {
        grid-column: 14 / 21;
      }

      &-head-colors {
        ${letterStyleSmallTextDesktoAndTable}
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;

        &-title {
          margin: 0;
          color: var(--rstyle1-gray-secondary);
        }

        &-id {
          position: absolute;
          margin: 0;
          color: var(--rstyle1-gray-icons-placeholders);
          align-content: center;
          right: 0;
        }
      }

      &-colors {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
      }

      &-color {
        box-sizing: border-box;
        padding: 2px;
        border: 2px solid white;
        border-spacing: 2px;
        width: 32px;
        height: 32px;
        border-radius: 36px;
        outline: 1px solid var(--rstyle1-gray-elements);

        cursor: pointer;
        transition-duration: 0.25s;

        &:hover {
          outline: 1px solid var(--rstyle1-gray-icons-placeholders);
        }

        &--selected {
          outline: 1px solid var(--rstyle1-primary);
        }

        &--gold {
          background-color: #fcdbc1;
        }
        &--midnightgreen {
          background-color: #5f7170;
        }
        &--midnight {
          background-color: #1d242d;
        }
        &--spacegray {
          background-color: #4c4c4c;
        }
        &--space-gray {
          background-color: #4c4c4c;
        }
        &--silver {
          background-color: #f0f0f0;
        }
        &--black {
          background-color: black;
        }
        &--green {
          background-color: green;
        }
        &--yellow {
          background-color: yellow;
        }
        &--white {
          background-color: white;
        }
        &--purple {
          background-color: purple;
        }
        &--red {
          background-color: red;
        }
        &--starlight {
          background-color: #e8e3d9;
        }
        &--pink {
          background-color: pink;
        }
        &--rosegold {
          background-color: #fbd2c9;
        }
        &--coral {
          background-color: #fe6b5b;
        }
        &--blue {
          background-color: blue;
        }
        &--sierrablue {
          background-color: #9db9d2;
        }
        &--graphite {
          background-color: #666460;
        }
        &--spaceblack {
          background-color: #3e3c3b;
        }
        &--skyblue {
          background-color: #b2c4d2;
        }
      }

      &-capacity {
        padding-block: 24px;
        border-block: 1px solid var(--rstyle1-gray-elements);
        margin-bottom: 32px;

        &-title {
          ${letterStyleSmallTextDesktoAndTable}
          margin: 0;
          color: var(--rstyle1-gray-secondary);
          margin-bottom: 8px;
        }

        &-memo {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          &-option {
            border-radius: 4px;
            padding: 7px 8px;
            padding-bottom: 5px;
            border: 1px solid var(--rstyle1-gray-icons-placeholders);
            ${letterStyleBodyTextDesktoAndTable}
            cursor: pointer;

            transition-duration: 0.25s;

            &:hover {
              border: 1px solid var(--rstyle1-gray-elements);
            }

            &--selected {
              background-color: var(--rstyle1-primary);
              color: white;
              border: 1px solid var(--rstyle1-primary);
            }
          }
        }
      }

      &-shopping {
        margin-bottom: 32px;

        &-price {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 16px;

          &-new {
            margin: 0;
            ${letterStyleH1Mobile}
          }

          &-old {
            margin: 0;
            position: relative;
            ${letterStyleH2Mobile}
            font-weight: 500;
            color: var(--rstyle1-gray-secondary);
            text-decoration: line-through;
          }
        }

        &-add {
          display: flex;
          gap: 8px;
          justify-content: center;

          &-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--rstyle1-gray-icons-placeholders);
            background-color: #fff;
            cursor: pointer;

            transition-duration: 0.25s;
          }

          &-cart {
            ${letterStyleButtonsDesktoAndTable}
            border-radius: 48px;
            flex: auto;
            color: white;
            background-color: var(--rstyle1-accent);

            &:hover {
              box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
            }

            &--selected {
              background-color: white;
              color: var(--rstyle1-accent);

              &:hover {
                box-shadow: none;
                border: 1px solid var(--rstyle1-accent);
              }
            }
          }

          &-favorite {
            width: 48px;
            height: 48px;
            border-radius: 40px;

            &:hover {
              border: 1px solid var(--rstyle1-primary);
            }
          }
        }
      }

      &-informations {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-card {
          display: flex;
          justify-content: space-between;
          ${letterStyleSmallTextDesktoAndTable}

          &-especification {
            margin: 0;
            color: var(--rstyle1-gray-secondary);
          }

          &-value {
            margin: 0;
            color: var(--rstyle1-primary);
          }
        }
      }
    }

    &__details {
      display: grid;
      row-gap: 56px;

      @media (min-width: 1200px) {
        grid-template-columns: repeat(24, 1fr);
        margin-bottom: 80px;
      }

      &-about {
        @media (min-width: 1200px) {
          grid-column: 1 / 12;
        }

        &-title {
          margin: 0;
          padding-bottom: 16px;
          ${letterStyleH3Mobile}
          border-bottom: 1px solid var(--rstyle1-gray-elements);
          margin-bottom: 32px;

          @media (min-width: 640px) {
            font-size: 24px;
            font-weight: 800;
          }
        }

        &-contents {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        &-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        &-header {
          margin: 0;
          ${letterStyleH4Mobile}

          @media (min-width: 640px) {
            font-size: 20px;
          }
        }

        &-description {
          margin: 0;
          ${letterStyleBodyTextDesktoAndTable}
          color: var(--rstyle1-gray-secondary);
          font-weight: 700;

          @media (min-width: 1200px) {
            font-weight: 800;
          }
        }
      }

      &-techs {
        @media (min-width: 1200px) {
          grid-column: 14 / 25;
        }

        &-title {
          margin: 0;
          padding-bottom: 16px;
          ${letterStyleH3Mobile}
          border-bottom: 1px solid var(--rstyle1-gray-elements);
          margin-bottom: 30px;

          @media (min-width: 640px) {
            margin-bottom: 25px;
            font-size: 24px;
          }
        }

        &-information {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;

          &-especifications {
            ${letterStyleBodyTextDesktoAndTable}
            font-weight: 700;
            color: var(--rstyle1-gray-secondary);
          }

          &-value {
            ${letterStyleBodyTextDesktoAndTable}
            font-weight: 700;
          }
        }
      }
    }
  }

  .product-slider {
    position: relative;
    max-width: 1180px; /* 4 cards x 210px each (200px width + 10px margin) */
    overflow: hidden;
    padding-top: 40px;
    width: 100%;

    &__title-and-buttons {
      justify-content: space-between;
    }
  }
`;

export default StyledProductDetailsPage;