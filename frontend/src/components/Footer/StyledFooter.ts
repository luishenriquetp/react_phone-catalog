import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footer__links {
    bottom: 0;
    background-color: #fff;
    height: 96px;
    position: relative;
    border-top: 2px solid #e2e6e9;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: space-between;
  }

  .footer__item {
    margin-right: 64px;
    text-transform: uppercase;
    font-family: Mont;
    font-size: 12px;
    font-weight: 800;
    line-height: 96px;
    letter-spacing: 0.04em;
    color: #89939a;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--rstyle1-gray-primary);
    }
  }

  #footer__logo {
    margin-left: 25px;
  }

  .footer__center-links {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  .footer__icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 96px;
    line-height: 0;
  }

  .footer__icons img {
    width: 32px;
    height: 32px;
  }

  .footer__icons span {
    margin-right: 5px;
  }

  @media (max-width: 639px) {
    .footer__links {
      height: 257px;
      padding: 32px 0 0 16px;
    }

    .footer__links,
    .footer__links .footer__center-links {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer__item,
    .footer__center-links {
      margin: 0 0 16px 0;
      line-height: 1.5;
    }

    #footer__logo {
      margin-left: 0;
    }

    .footer__icons {
      width: 100%;
      height: auto;
      line-height: normal;
      justify-content: center;
    }

    .footer__icons span {
      display: inline;
      margin-right: 5px;
      box-sizing: border-box;
    }
  }
`;

export default StyledFooter;
