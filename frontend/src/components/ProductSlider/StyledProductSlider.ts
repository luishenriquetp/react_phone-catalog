import styled from 'styled-components';
import { letterStyleH2DesktoAndTable } from '../../styles/GlobalStyles.ts';

export const StyledProductSlider = styled.div`
  position: relative;
  max-width: 1180px; /* 4 cards x 210px each (200px width + 10px margin) */
  overflow: hidden;
  padding-top: 40px;

  .product-slider__title-and-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    ${letterStyleH2DesktoAndTable}

    @media (max-width: 631px) {
      font-size: 22px;
      line-height: 60px;
    }
  }

  .nav-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    gap: 5px;

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
  }

  .cards-wrapper {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .slider_slide {
    margin-right: 10px;
  }
`;

export default StyledProductSlider;
