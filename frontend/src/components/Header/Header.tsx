/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader.ts';
import { useAppSelector } from '../../context/hooks.ts';
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.types.ts';

function Header(): React.ReactNode {
  const [activeMenu, setActiveMenu] = useState(false);

  const favoritesQtd = useAppSelector(state => state.favourites.products.length);
  const cartQtd = useAppSelector(state => state.cart.products.length);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (newWidth > 639) {
        if (activeMenu) {
          setActiveMenu(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeMenu]);

  return (
    <StyledHeader className="header" id="header" $qtdFav={favoritesQtd} $cartQtd={cartQtd}>
      <nav id="nav_bar" className="navbar">
        <div className="nav_logo">
          <img id="logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="nav_links">
          <Link to="/home" className="nav_link">
            {' '}
            {/* exist a active class in this class adjust  */}
            Home
          </Link>
          <NavLink className="nav_link" to="/shop/phones">
            Phones
          </NavLink>
          <NavLink className="nav_link" to="/shop/tablets">
            Tablets
          </NavLink>
          <NavLink className="nav_link" to="/shop/accessories">
            Accessories
          </NavLink>
        </div>
        <div className="nav_icons">
          <NavLink className="icon icon--like" to="/favorites">
            <img src="/img/icons/favourites_black.png" alt="Like" />
          </NavLink>
          <NavLink className="icon icon--cart" to="/cart">
            <img src="/img/icons/shopping_bag_black.png" alt="Cart" />
          </NavLink>
        </div>
        <div className="icon burger_menu" onClick={() => setActiveMenu(state => !state)}>
          {activeMenu ? (
            <Icon icon={IconType.CLOSE} fill="black" />
          ) : (
            <Icon icon={IconType.MENU} fill="black" />
          )}
        </div>
      </nav>
      {activeMenu && <BurgerMenu setActiveMenu={setActiveMenu} />}
    </StyledHeader>
  );
}

export default Header;
