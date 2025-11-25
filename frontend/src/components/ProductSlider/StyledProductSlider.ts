import styled from 'styled-components';
import { letterStyleH2Mobile } from '../../styles/GlobalStyles.ts';

export const StyledProductSlider = styled.div`
  position: relative;
  max-width: 1180px; /* 4 cards x 210px each (200px width + 10px margin) */
  overflow: hidden;
  padding-top: 40px;

  .product-slider__title-and-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30vw;
    margin: 0 16px 24px;

    @media (min-width: 640px) and (max-width: 1199px) {
      justify-content: space-between;
    }
    @media (min-width: 1200px) {
      justify-content: space-between;
    }
  }

  .product-slider__title {
    width: 130px;
    ${letterStyleH2Mobile}

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 300px;
    }

    @media (min-width: 1200px) {
      width: 300px;
    }
  }

  .nav-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    gap: 16px;

    button {
      border: none;
      background-color: transparent;

      &:hover {
        background-image: url('./src/IconAssets/ButtonHover.svg');
        cursor: pointer;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  .card-container {
    display: flex;
    overflow: hidden;
    max-width: 1180px;

    margin: 0 16px;

    @media (min-width: 1200px) {
      margin: 0;
    }
  }

  .cards-wrapper {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .slider_slide {
    margin-right: 10px;
    width: 212px;

    @media (min-width: 640px) and (max-width: 1199px) {
      width: 237px;
    }

    @media (min-width: 1200px) {
      width: 272px;
    }
  }
`;

export default StyledProductSlider;
