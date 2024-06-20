import styled from 'styled-components';
import {
  letterStyleH1Mobile,
  letterStyleBodyTextDesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
  letterStyleButtonsDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledPageCatalog = styled.div`
  margin: 0;

  .top-section {
    display: flex;
    flex-direction: column;
    padding-top: 64px;
    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 640px) {
      padding-right: 24px;
      padding-left: 24px;
    }

    @media (min-width: 1200px) {
      padding-right: 32px;
      padding-left: 32px;
    }

    &__title {
      margin: 0;
      margin-bottom: 8px;
      ${letterStyleH1Mobile};
    }

    &__subtitle {
      ${letterStyleBodyTextDesktoAndTable}
      color: var(--rstyle1-gray-secondary);
      margin: 0;
      margin-bottom: 32px;

      @media (min-width: 640px) {
        margin-bottom: 40px;
      }
    }
  }

  .select {
    display: flex;
    gap: 16px;
    /* padding-left: 16px; */
    /* padding-right: 16px; */
    margin-bottom: 24px;

    @media (min-width: 640px) {
      /* padding-right: 24px; */
      /* padding-left: 24px; */
    }

    @media (min-width: 1200px) {
      /* padding-right: 32px; */
      /* padding-left: 32px; */
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (min-width: 640px) {
        align-items: flex-start;
      }
    }

    &__label {
      ${letterStyleSmallTextDesktoAndTable};
      color: var(--rstyle1-gray-secondary);
      margin-bottom: 4px;
    }

    &__box {
      width: 136px;
      height: 40px;
      ${letterStyleButtonsDesktoAndTable};
      padding-inline: 12px;
      border-radius: 8px;
      border: 1px solid #b4bdc3;
      box-sizing: border-box;
      appearance: none;

      &:hover {
        border: 1px solid #89939a;
      }

      &:focus-visible {
        outline-color: #0f0f11;
      }
    }

    &__box--selected {
      @media (min-width: 640px) {
        width: 187px;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (min-width: 640px) {
      gap: 16px;
    }

    &__card {
      width: 287px;
      height: 440px;

      background: #fff;
      border: 10px solid #ddd;
      border-radius: 8px;
      box-sizing: border-box;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      @media (min-width: 640px) {
        width: 288px;
        height: 506px;
        max-width: calc();
      }

      @media (min-width: 768px) {
        width: 229px;
        height: 506px;
      }

      @media (min-width: 1200px) {
        width: 272px;
        height: 506px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 64px;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 40px;

    @media (min-width: 640px) {
      margin-top: 40px;
    }

    @media (min-width: 1200px) {
      margin-bottom: 80px;
    }

    &__button {
      width: 32px;
      height: 32px;
      border: 1px solid #e2e6e9;
      border-radius: 48px;
      box-sizing: border-box;
      font-size: 14px;
      cursor: pointer;
      transition: 0.5s;
      margin-inline: 2px;

      &--isarrow {
        margin: 0 16px;
        border: 1px solid #b4bdc3;
        transition: none;
      }

      &--filled {
        background-color: var(--rstyle1-primary);
        color: #ffffff;
        width: 40px;
        height: 40px;
      }

      &:hover {
        border: 1px solid #0f0f11;
      }
      &--hidden {
        visibility: hidden;
      }
    }
  }
`;

export default StyledPageCatalog;
