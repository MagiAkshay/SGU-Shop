import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import "./ProductSlider.css";
import { useCart } from "../../cartContexts/CartContext";

function ProductSlider() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const sliderRef = useRef(null);

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

    useEffect(() => {
        const slider = sliderRef.current;
        const scrollInterval = setInterval(() => {
            if (slider) {
                slider.scrollBy({ left: 250, behavior: 'smooth' });
            }
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(scrollInterval);
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="product-slider-container">
            <h2 className="slider-title">Onsale Products</h2>
            <div className="product-slider-wrapper" ref={sliderRef}>
                {products.map((product) => (
                    <div key={product._id} className="product-slider-item">
                        <img
                            src={product.image_url_1}
                            alt={product.product_name}
                            className="slider-product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-title">{product.product_name}</h3>
                            <p className="product-price">${product.price}</p>
                            <button
                                className="btn-add-to-cart"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductSlider;
