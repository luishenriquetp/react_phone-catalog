import React from 'react';
import StyledHeader from './StyledHeader.ts';
import { NavLink } from 'react-router-dom';

function Header(): React.ReactNode {
  return (
    <StyledHeader className="header" id='header'>
      <nav id="nav_bar" className="navbar">
        <div className="nav_logo">
          <img id="logo" src="img/icons/logo.png" alt="Logo" />
        </div>
        <div className="nav_links">
          <a href="/" className="nav_link"> {/*exist a active class in this class adjust  */}
            Home
          </a>
          <NavLink className="nav_link" to="/phones">
            Phones
          </NavLink>
          <a className="nav_link" href="/tablets">
            Tablets
          </a>
          <a className="nav_link" href="/accessories">
            Accessories
          </a>
        </div>
        <div className="nav_icons">
          <a className="icon icon--like" href="/favorites">
            <img src="img/icons/favourites_black.png" alt="Like" />
          </a>
          <NavLink className="icon" to="/cart">
            <img src="img/icons/shopping_bag_black.png" alt="Cart" />
          </NavLink>
        </div>
        <a className="icon burger_menu" href="/">
          <img src="img/icons/burger_menu.png" alt="Burger Menu" />
        </a>
      </nav>
    </StyledHeader>
  );
}

export default Header;
