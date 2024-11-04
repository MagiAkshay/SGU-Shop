  // src/components/ProductPage/ProductPage.js
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import ProductCard from '../ProductCard/ProductCard';
  import { useCart } from '../../cartContexts/CartContext'; // Correct path
  import './ProductPage.css';

  function ProductPage() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Destructure correctly

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:7000/api/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }, []);
    
    return (
      <div className="product-page">
        <h2>Products</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={addToCart} // Pass function as prop
            />
          ))}
        </div>
      </div>
    );
  }

  export default ProductPage;
