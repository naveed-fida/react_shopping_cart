import React from 'react';
import CartItem from './CartItem';
import { calculateTotalPrice } from '../lib/helpers';

const Cart = ({cartItems, onCheckoutClick}) => {
  const cartEmpty = cartItems.length === 0;
  const cartItemList = cartItems.map((item) => {
    return <CartItem key={item.productId} {...item} />
  });

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {
        cartEmpty ? (
          <div>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <a className="button checkout disabled">Checkout</a>
          </div>
        ) : (
          <div>
            <table className="cart-items">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItemList}
                <tr>
                  <td colSpan="3" className="total">Total: ${calculateTotalPrice(cartItems)}</td>
                </tr>
              </tbody>
            </table>
            <a class="button checkout" onClick={onCheckoutClick}>Checkout</a>
          </div>
        )
      }
    </div>
  );
}

export default Cart;
