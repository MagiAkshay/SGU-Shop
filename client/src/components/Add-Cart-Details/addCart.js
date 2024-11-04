import React from 'react';
import { useCart } from '../../cartContexts/CartContext';
import './addCart.css'; // Ensure this file exists

const AddCart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const handleIncrease = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecrease = (productId) => {
    if (cart.find(product => product._id === productId).quantity > 1) {
      decreaseQuantity(productId);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = () => {
    // Handle buy now action
    alert("Proceed to checkout or payment page");
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product._id} className="cart-item">
            <img src={product.image_url_1} alt={product.product_name} className="cart-image" />
            <div className="cart-info">
              <h5>{product.product_name}</h5>
              <p>${product.price}</p>
              <div className="cart-controls">
                <button onClick={() => handleDecrease(product._id)} className="btn-quantity">-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncrease(product._id)} className="btn-quantity">+</button>
                <button onClick={() => handleRemove(product._id)} className="btn-remove">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button onClick={handleBuyNow} className="btn-buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default AddCart;
