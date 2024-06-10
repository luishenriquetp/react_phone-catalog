import React from 'react';
import StyledCartTotalAmount from './StyledCartTotalAmount.ts';

function CartTotalAmount() {
  return (
    <StyledCartTotalAmount className="cart-total__wrapper">
      <div className="cart-total__titles">
        <h2 className="cart-total__title-content">`$ ...`</h2>
        <span className="cart-total__total-quantity">`Total for ... items`</span>
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
