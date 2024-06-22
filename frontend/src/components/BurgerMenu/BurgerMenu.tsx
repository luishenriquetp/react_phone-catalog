import { Link } from 'react-router-dom';
import { useAppSelector } from '../../context/hooks.ts';
import StyledPageBurgerMenu from './StyledPageBurgerMenu.ts';

type Props = {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerMenu({ setActiveMenu }: Props) {
  const qtdCart = useAppSelector(state =>
    state.cart.quantity.reduce((acc, e) => {
      acc += e;

      return acc;
    }, 0),
  );
  const qtdFav = useAppSelector(state => state.favourites.products.length);

  return (
    <StyledPageBurgerMenu className="burger-menu" $cartQtd={qtdCart} $favQtd={qtdFav}>
      <div className="burger-menu__nav">
        <Link className="burger-menu__nav-link" to="/home" onClick={() => setActiveMenu(false)}>
          HOME
        </Link>
        <Link
          className="burger-menu__nav-link"
          to="/shop/phones"
          onClick={() => setActiveMenu(false)}
        >
          PHONES
        </Link>
        <Link
          className="burger-menu__nav-link"
          to="/shop/tablets"
          onClick={() => setActiveMenu(false)}
        >
          TABLETS
        </Link>
        <Link
          className="burger-menu__nav-link"
          to="/shop/accessories"
          onClick={() => setActiveMenu(false)}
        >
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
