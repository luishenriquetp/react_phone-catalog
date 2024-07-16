import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import StyledHeader from './StyledHeader.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { useAppSelector } from '../../context/hooks.ts';

function HeaderN(): React.ReactNode {
  const cartQtd = useAppSelector(state => state.cart.quantity.reduce((acc, el) => acc + el, 0));
  const favQtd = useAppSelector(state => state.favourites.products.length);
  const navigateTo = useNavigate();

  return (
    <StyledHeader className="header">
      <div className="header_logo">
        <img id="logo" src="/img/icons/logo.png" alt="Logo" />
      </div>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/home" className="nav__link">
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/phones" className="nav__link">
              Phones
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/tablets" className="nav__link">
              Tablets
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/accessories" className="nav__link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__icons-container icons-container">
        <button
          className="icons-container__btn"
          onClick={() => navigateTo('/')}
          type="button"
          aria-label="Go to login page"
        >
          {!!favQtd && <div className="icons-container__btn--indicator">{favQtd}</div>}
          <Icon icon={IconType.LOGIN_DOOR} />
        </button>
        <button
          className="icons-container__btn"
          onClick={() => navigateTo('/favorites')}
          type="button"
          aria-label="Go to favorites page"
        >
          {!!favQtd && <div className="icons-container__btn--indicator">{favQtd}</div>}
          <Icon icon={IconType.EMPTY_HEARTLIKE} />
        </button>
        <button
          className="icons-container__btn"
          onClick={() => navigateTo('/cart')}
          type="button"
          aria-label="Go to cart page"
        >
          {!!cartQtd && <div className="icons-container__btn--indicator">{cartQtd}</div>}
          <Icon icon={IconType.EMPTY_CART} />
        </button>
        <button
          className="icons-container__btn icons-container__btn--menu-mobile"
          onClick={() => navigateTo('/mobileMenu')}
          type="button"
          aria-label="Go to Mobile Menu Navigation"
        >
          <Icon icon={IconType.MENU} />
        </button>
      </div>
    </StyledHeader>
  );
}

export default HeaderN;
