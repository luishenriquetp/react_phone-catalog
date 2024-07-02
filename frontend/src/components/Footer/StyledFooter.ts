import styled from 'styled-components';

const StyledFooter = styled.footer`
  .footerlinks {
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

  .footer-item {
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

  #logo {
    margin-left: 25px;
  }

  .center-links {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 96px;
    line-height: 0;
  }

  .icons img {
    width: 32px;
    height: 32px;
  }

  .icons span {
    margin-right: 5px;
  }

  @media (max-width: 639px) {
    .footerlinks {
      height: 257px;
      padding: 32px 0 0 16px;
    }

    .footerlinks,
    .footerlinks div.center-links {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-item,
    .center-links {
      margin: 0 0 16px 0;
      line-height: 1.5;
    }

    #logo {
      margin-left: 0;
    }

    .icons {
      width: 100%;
      height: auto;
      line-height: normal;
      justify-content: center;
    }

    .icons span {
      display: inline;
      margin-right: 5px;
      box-sizing: border-box;
    }
  }
`;

export default StyledFooter;
