import React from 'react';
import StyledPageBurgerMenu from './StyledPageBurgerMenu.ts';

// as próximas 2 funções (LogoIcon, CloseIcon, HeartIcon e BagIcon são dados mockados)

export function HeartIcon() {
  return (
    <img
      src="public/img/icons/Favourites (Heart Like).svg"
      alt="heart-icon"
      className="burger-menu__icon"
    />
  );
}

export function BagIcon() {
  return (
    <img src="public/img/icons/Shopping bag (Cart).svg" alt="logo" className="burger-menu__icon" />
  );
}

export function BurgerMenu() {
  return (
    <StyledPageBurgerMenu className="burger-menu">
      <div className="burger-menu__header"> </div>
      <div className="burger-menu__nav">
        <div className="burger-menu__nav-link">HOME</div>
        <div className="burger-menu__nav-link">PHONES</div>
        <div className="burger-menu__nav-link">TABLETS</div>
        <div className="burger-menu__nav-link">ACCESSORIES</div>
      </div>
      <div className="burger-menu__footer">
        <div className="burger-menu__footer-icon">
          <HeartIcon />
        </div>
        <div className="burger-menu__footer-icon">
          <BagIcon />
        </div>
      </div>
    </StyledPageBurgerMenu>
  );
}

export default BurgerMenu;
