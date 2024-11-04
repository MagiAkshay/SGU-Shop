import React, { useState, useEffect } from "react";
import "./mobile.css";
import { useCart } from "../../cartContexts/CartContext"; // Import the useCart hook
import axios from 'axios';

function Mobile() {
    const { addToCart } = useCart(); // Use the useCart hook to get access to addToCart
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSecondImage, setShowSecondImage] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [value, setValue] = useState(50); // Initial value set to 50

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

    // Timer logic
    useEffect(() => {
        const targetDate = new Date("2024-12-31T23:59:59");
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Event handlers
    const handleMouseMove = () => setShowSecondImage(true);
    const handleMouseLeave = () => setShowSecondImage(false);
    const handleChange = (event) => setValue(event.target.value);

    const handleAddToCart = (product) => {
        addToCart(product); // Add the selected product to the cart
    };

    const displayedProducts = products.slice(0, 2);

    return (
        <div>
            <div className="top-deals-div">
                <span className="top-deals">Top Deals Of The Day</span>
            </div>
            <div className="two-moblie-div"> 
                {displayedProducts.map((product) => (
                    <div key={product._id} className="image-mobile-div">
                        <div>
                            <button
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="btn-mobile"
                            >
                                <div className="btb-image-change">
                                    {showSecondImage ? (
                                        <div className="image-icon-div">
                                            <div>
                                                <img
                                                    src={product.image_url_2}
                                                    alt="Alternate view of product"
                                                    className="image-change-mobile"
                                                />
                                            </div>
                                            <div className="icon-mobile-div">
                                                <img
                                                    src="https://example.com/heart-icon.jpg"
                                                    alt="Heart symbol"
                                                    className="heart-icons-mobile"
                                                />
                                                <img
                                                    src="https://example.com/eye-icon.jpg"
                                                    alt="Eye symbol"
                                                    className="heart-icons-mobile"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <img
                                                src={product.image_url_1}
                                                alt="Primary view of product"
                                                className="image-change-mobile"
                                            />
                                        </div>
                                    )}
                                </div>
                            </button>
                        </div>
                        <div className="moblie-describtion">
                            <div className="mobile-headname">
                                <h6>{product.product_name}</h6>
                            </div>
                            <div>
                                <div>
                                    <img
                                        src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                                        alt="Star rating"
                                        className="star-icon-moblie"
                                    />
                                    &nbsp;&nbsp;&nbsp;<span>2 Reviews</span>
                                    <p>${product.price}</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Screen Size: {product.specifications.screenSize}</li>
                                        <li>Operating System: {product.specifications.os}</li>
                                        <li>Product Length: {product.specifications.length}</li>
                                    </ul>
                                </div>
                                <div className="timer-divs-direction">
                                    <div className="timer-div">{timeLeft.days}</div>
                                    <div className="timer-div">{timeLeft.hours}</div>
                                    <div className="timer-div">{timeLeft.minutes}</div>
                                    <div className="timer-div">{timeLeft.seconds}</div>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="range"
                                    id="rangeInput"
                                    min="0"
                                    max="100"
                                    value={value}
                                    className="range-mobile-sold"
                                    onChange={handleChange}
                                />
                                <div>Sold: {value}/100</div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-dark btn-AddCart-moblie-large"
                                    onClick={() => handleAddToCart(product)} // Add the product to the cart
                                >
                                    Add to Cart
                                </button>
                                {loading ? <div className="loader"></div> : ""}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mobile;
