// src/components/CartPage/CartPage.js
import React from 'react';
import { useCart } from '../../cartContexts/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.image_url_1} alt={item.product_name} className="cart-image" />
            <div className="cart-info">
              <h5>{item.product_name}</h5>
              <p>Price: ${item.price}</p>
              <div className="cart-controls">
                <button className="btn-quantity" onClick={() => decreaseQuantity(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn-quantity" onClick={() => increaseQuantity(item._id)}>+</button>
                <button className="btn-remove" onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
         