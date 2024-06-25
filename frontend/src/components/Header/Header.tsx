import React from 'react';
import StyledHeader from './StyledHeader.ts';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { useSelector } from 'react-redux';
import store from '../../context/store.ts';
import { useAppSelector } from '../../context/hooks.ts';


function HeaderN(): React.ReactNode {
  const cartQtd = useAppSelector(state =>  state.cart.quantity.reduce((acc, el) => acc + el, 0));
  const favQtd = useAppSelector(state =>  state.favourites.products.length);

  return (
    <StyledHeader className="header">
      <div className="header_logo">
        <img id="logo" src="/img/icons/logo.png" alt="Logo" />
      </div>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/home"
              className="nav__link"
            >
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/homeN"
              className="nav__link"
            >
              Phones
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/homeN"
              className="nav__link"
            >
              Tablets
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/homeN"
              className="nav__link"
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__icons-container icons-container" >
        <button className="icons-container__btn">
        {!!favQtd && <div className="icons-container__btn--indicator">{favQtd}</div>}
          <Icon icon={IconType.EMPTY_HEARTLIKE}/>
        </button>
        <button className="icons-container__btn">
          {!!cartQtd && <div className="icons-container__btn--indicator">{cartQtd}</div>}
          <Icon icon={IconType.EMPTY_CART} />
        </button>
        <button className="icons-container__btn icons-container__btn--menu-mobile">
          <Icon icon={IconType.MENU} />
        </button>
      </div>
    </StyledHeader>
  );
}

export default HeaderN;
