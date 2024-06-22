import styled from 'styled-components';

interface Props {
  $qtdFav: number;
  $cartQtd: number;
}

const StyledHeader = styled.header<Props>`
  .navbar {
    top: 0;
    background-color: #fff;
    height: 64px;
    width: 100%;
    position: fixed;
    border-bottom: 2px solid #e2e6e9;
    display: flex;
    align-items: center;
    padding: 0px;
    z-index: 99;
  }

  .nav_logo {
    margin-left: 25px;
  }

  .nav_links {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin-left: 64px;
  }

  .nav_link {
    margin-right: 64px;
    text-transform: uppercase;
    font-family: Mont;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    height: 64px;
    position: relative;
  }

  .nav_link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  .nav_link.active::after,
  .nav_link:hover::after {
    background-color: #000;
  }

  .nav_icons {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .icon {
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #e2e6e9;
    width: 64px;
    height: 64px;
    position: relative;
  }

  .icon img {
    width: 16px;
    height: 16px;
  }

  .icon--like::after {
    content: '${p => String(p.$qtdFav)}';
    display: ${p => (!!p.$qtdFav ? 'block' : 'none')};
    color: wheat;
    text-align: center;
    position: absolute;
    right: 20%;
    top: 25%;
    background-color: purple;
    border-radius: 50%;
    border: 3px solid white;
    width: 25%;
    height: 25%;
  }

  .icon--cart::after {
    content: '${p => String(p.$cartQtd)}';
    display: ${p => (!!p.$cartQtd ? 'block' : 'none')};
    color: wheat;
    text-align: center;
    position: absolute;
    right: 20%;
    top: 25%;
    background-color: purple;
    border-radius: 50%;
    border: 3px solid white;
    width: 25%;
    height: 25%;
  }

  .burger_menu {
    display: none;
  }

  @media (max-width: 1199px) {
    .navbar {
      height: 48px;
    }
    .nav_links {
      margin-left: 32px;
    }
    .nav_link {
      margin-right: 32px;
    }

    .nav_link::after {
      bottom: 8px;
    }
    .icon {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 639px) {
    .nav_links,
    .nav_icons {
      display: none;
    }
    .burger_menu {
      display: flex;
      margin-left: auto;
    }
  }
`;

export default StyledHeader;
