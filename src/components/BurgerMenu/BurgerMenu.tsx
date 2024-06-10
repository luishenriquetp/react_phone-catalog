import React from 'react';
import StyledPageBurgerMenu from './StyledPageBurgerMenu.ts';

export function BurgerMenu() {
  return (
    <StyledPageBurgerMenu className="burger-menu">
      <div className="burger-menu__header">
        <nav id="nav_bar" className="burger-menu__header-navbar">
          <div className="burger-menu__header-navbar-logo">
            <img id="logo" src="public\img\icons\logo (1).png" alt="Logo" />
          </div>
          <div className="burger-menu__header-navbar-icon">
            <img src="public\img\icons\Close.svg" alt="Icon Close" />
          </div>
        </nav>
      </div>
      <div className="burger-menu__nav">
        <div className="burger-menu__nav-link">HOME</div>
        <div className="burger-menu__nav-link">PHONES</div>
        <div className="burger-menu__nav-link">TABLETS</div>
        <div className="burger-menu__nav-link">ACCESSORIES</div>
      </div>
      <div className="burger-menu__footer">
        <div className="burger-menu__footer-icon">
          <img
            src="public/img/icons/Favourites (Heart Like).svg"
            alt="heart-icon"
            className="burger-menu__icon"
          />
        </div>
        <div className="burger-menu__footer-icon">
          <img
            src="public/img/icons/Shopping bag (Cart).svg"
            alt="logo"
            className="burger-menu__icon"
          />
        </div>
      </div>
    </StyledPageBurgerMenu>
  );
}

export default BurgerMenu;
