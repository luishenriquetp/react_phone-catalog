/* eslint-disable react/react-in-jsx-scope */
import StyledCartTotalAmount from './StyledCartTotalAmount.ts';
import { useAppSelector } from '../../context/hooks.ts';

function CartTotalAmount() {
  const { totalPrice, quantity } = useAppSelector(state => state.cart);

  return (
    <StyledCartTotalAmount className="cart-total__wrapper">
      <div className="cart-total__titles">
        <h2 className="cart-total__title-content">{`$${totalPrice}`}</h2>
        <span className="cart-total__total-quantity">{`Total for ${quantity.length} items`}</span>
        <div />
        <hr className="line" />
      </div>
      <button type="button" className="cart-total__checkout-btn">
        Checkout
      </button>
    </StyledCartTotalAmount>
  );
}

export default CartTotalAmount;
