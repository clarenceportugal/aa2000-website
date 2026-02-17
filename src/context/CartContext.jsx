import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [appliedCode, setAppliedCode] = useState('');

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prevCart => prevCart.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ));
    };

    const applyDiscount = (code) => {
        if (code.toLowerCase() === 'aa2000') {
            setDiscount(0.20); // 20% off
            setAppliedCode(code.toUpperCase());
            return { success: true, message: 'Code AA2000 applied successfully!' };
        } else {
            setDiscount(0);
            setAppliedCode('');
            return { success: false, message: 'Invalid promo code.' };
        }
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = subtotal * discount;
    const totalPrice = subtotal - discountAmount;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, discount, discountAmount, totalPrice, applyDiscount, appliedCode }}>
            {children}
        </CartContext.Provider>
    );
};
