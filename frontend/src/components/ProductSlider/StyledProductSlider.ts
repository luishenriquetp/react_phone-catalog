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
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    position: absolute;
    top: 65px;
    right: 5px;
    gap: 5px;

    button {
      border: none;
      background-color: transparent;

      &:hover {
        background-image: url('./src/IconAssets/ButtonHover.svg');
        cursor: pointer;
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
