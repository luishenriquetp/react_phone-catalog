import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../context/hooks.ts';
import StyledPageBurgerMenu from './StyledPageBurgerMenu.ts';

export function BurgerMenu(): React.ReactNode {
  const qtdCart = useAppSelector(state =>
    state.cart.quantity.reduce((acc, e) => {
      const newAcc = acc + e;

      return newAcc;
    }, 0),
  );
  const qtdFav = useAppSelector(state => state.favourites.products.length);

  return (
    <StyledPageBurgerMenu className="burger-menu" $cartQtd={qtdCart} $favQtd={qtdFav}>
      <div className="burger-menu__nav">
        <Link className="burger-menu__nav-link" to="/home">
          HOME
        </Link>
        <Link className="burger-menu__nav-link" to="/shop/phones">
          PHONES
        </Link>
        <Link className="burger-menu__nav-link" to="/shop/tablets">
          TABLETS
        </Link>
        <Link className="burger-menu__nav-link" to="/shop/accessories">
          ACCESSORIES
        </Link>
      </div>
      <div className="burger-menu__footer">
        <div className="burger-menu__footer-icon burger-menu__footer--cart-indicator">
          <Link to="/cart">
            <img
              src="/img/icons/Shopping bag (Cart).svg"
              alt="heart-icon"
              className="burger-menu__icon"
            />
          </Link>
        </div>
        <div className="burger-menu__footer-icon burger-menu__footer--fav-indicator">
          <Link to="/favorites">
            <img src="/img/icons/favourites_black.png" alt="logo" className="burger-menu__icon" />
          </Link>
        </div>
      </div>
    </StyledPageBurgerMenu>
  );
}

export default BurgerMenu;
