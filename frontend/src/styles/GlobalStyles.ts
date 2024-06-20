import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --rstyle1-primary:#0F0F11;
    --rstyle1-secondary-accent: #F4BA47;
    --rstyle1-gray-primary: #0F0F11;
    --rstyle1-gray-secondary: #89939A;
    --rstyle1-gray-icons-placeholders: #B4BDC3;
    --rstyle1-gray-elements: #E2E6E9;
    --rstyle1-gray-background: #FAFBFC;
    --rstyle1-gray-white: #FAFBFC;
    --rstyle1-green2: #27AE60;
    --rstyle1-red: #EB5757;
    --rstyle1-accent: #4219D0;
  }

  @font-face {
    font-family: 'Mont';
    font-weight: 800;
    src: url('/fonts/Mont-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Mont';
    font-weight: 700;
    src: url('/fonts/Mont-SemiBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Mont';
    font-weight: 600;
    src: url('/fonts/Mont-Regular.otf') format('opentype');
  }

  * {
    box-sizing: border-box;
  }

html {
  }

  body {
    background-color: var(--rstyle1-gray-background);
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  img {
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: min(100vw, 320px);
    margin: 0 auto;
    padding-inline: 16px;

    @media (min-width: 640px) {
      max-width: min(100vw, 640px);
      padding-inline: 24px;
    }

    @media (min-width: 768px) {
      max-width:min(100vw, 768px);
    }

    @media (min-width: 1200px) {
      max-width: min(100vw, 1200px);
      padding-inline: 32px;
    }
  } 
`;

export const letterStyleH1DesktoAndTable = css`
  //styleName: Desktop & Tablet/H1;
  font-family: Mont;
  font-size: 48px;
  font-weight: 800;
  line-height: 56px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const letterStyleH2DesktoAndTable = css`
  //styleName: Desktop & Tablet/H2;
  font-family: Mont;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const letterStyleH3DesktoAndTable = css`
  //styleName: Desktop & Tablet/H3;
  font-family: Mont;
  font-size: 22px;
  font-weight: 800;
  line-height: 30.8px;
  text-align: left;
`;

export const letterStyleH4DesktoAndTable = css`
  //styleName: Desktop & Tablet/H4;
  font-family: Mont;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.56px;
  text-align: left;
`;

export const letterStyleUpperCase = css`
  //styleName: Uppercase;
  font-family: Mont;
  font-size: 12px;
  font-weight: 800;
  line-height: 11px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const letterStyleButtonsDesktoAndTable = css`
  //styleName: Buttons;
  font-family: Mont;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
`;

export const letterStyleBodyTextDesktoAndTable = css`
  //styleName: Body text 14;
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
`;

export const letterStyleSmallTextDesktoAndTable = css`
  //styleName: Small text 12;
  font-family: Mont;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.34px;
  text-align: left;
`;

export const letterStyleH1Mobile = css`
  //styleName: Mobile/H1;
  font-family: Mont;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const letterStyleH2Mobile = css`
  //styleName: Mobile/H2;
  font-family: Mont;
  font-size: 22px;
  font-weight: 800;
  line-height: 30.8px;
  text-align: left;
`;

export const letterStyleH3Mobile = css`
  //styleName: Mobile/H3;
  font-family: Mont;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.56px;
  text-align: left;
`;

export const letterStyleH4Mobile = css`
  //styleName: Mobile/H4;
  font-family: Mont;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.45px;
  text-align: left;
`;
