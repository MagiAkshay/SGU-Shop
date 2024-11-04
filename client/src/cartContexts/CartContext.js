import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item._id === product._id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Increase quantity of a product
    const increaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity of a product
    const decreaseQuantity = (productId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item._id === productId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            );
            return updatedCart;
        });
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item._id !== productId));
    };

    // Calculate total price
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using cart context
export const useCart = () => useContext(CartContext);
