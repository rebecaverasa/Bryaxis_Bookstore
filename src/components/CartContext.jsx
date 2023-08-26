import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    // Verifica se o item já está no carrinho
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Atualiza a quantidade do item
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // Adiciona o novo item ao carrinho
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(cartItem => cartItem.id !== itemId);
    setCartItems(updatedItems);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some(cartItem => cartItem.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
