// src/components/ProductCard/ProductCard.js
import React from 'react';
import './productCard.css';

function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image_url_1} alt={product.product_name} className="product-image" />
      <div className="product-info">
        <h5>{product.product_name}</h5>
        <p>${product.price}</p>
        <div className="product-details">
          <ul>
            <li>Screen Size: {product.specifications.screenSize}</li>
            <li>Operating System: {product.specifications.os}</li>
            <li>Product Length: {product.specifications.length}</li>
          </ul>
        </div>
        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
