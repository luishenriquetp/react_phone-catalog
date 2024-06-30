import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;

  .banner {
    &__structure {
      height: 100%;
      display: flex;
      gap: 0 16px;
      justify-content: center;
      align-items: stretch;
      margin: 0;

      @media (min-width: 640px) and (max-width: 1199px) {
        margin: 0 24px;
      }

      @media (min-width: 1200px) {
        margin: 0;
      }
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

export default StyledBanner;
