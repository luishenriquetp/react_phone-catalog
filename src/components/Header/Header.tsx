import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader.ts';

function Header(): React.ReactNode {
  return (
    <StyledHeader className="header" id="header">
      <nav id="nav_bar" className="navbar">
        <div className="nav_logo">
          <img id="logo" src="img/icons/logo.png" alt="Logo" />
        </div>
        <div className="nav_links">
          <Link to="/home" className="nav_link">
            {' '}
            {/* exist a active class in this class adjust  */}
            Home
          </Link>
          <NavLink className="nav_link" to="/phones">
            Phones
          </NavLink>
          <Link className="nav_link" to="/tablets">
            Tablets
          </Link>
          <Link className="nav_link" to="/accessories">
            Accessories
          </Link>
        </div>
        <div className="nav_icons">
          <NavLink className="icon icon--like" to="/favorites">
            <img src="img/icons/favourites_black.png" alt="Like" />
          </NavLink>
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
