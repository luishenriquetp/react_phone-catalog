import styled from 'styled-components';

export const StyledProductSlider = styled.div`
  .main-container {
    position: relative;
    max-width: 1180px; /* 4 cards x 210px each (200px width + 10px margin) */
    overflow: hidden;
    padding-top: 40px;
    h1 {
      display: inline-block;
      font-family: Mont;
      font-size: 32px;
      font-weight: 800;
      line-height: 40px;
      letter-spacing: -0.01em;
      text-align: left;

      @media (max-width: 631px) {
        font-size: 22px;
        line-height: 60px;
      }
    }
  }

  .nav-buttons {
    background: transparent;
    position: absolute;
    top: 65px;
    right: 5px;
    padding: 5px;
    display: flex;
    gap: 5px;
    button {
      width: 33px;
      height: 33px;
      border: none;
      color: transparent;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-size: 32px;
      background-image: url('./src/IconAssets/ButtonDefault.svg');
      &.left {
        transform: rotate(180deg);
      }
      &:hover {
        background-image: url('./src/IconAssets/ButtonHover.svg');
      }
      &.disabled {
        background-image: url('./src/IconAssets/ButtonDisabled.svg');
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
