import { useState, useEffect } from "react";

import {
  addToCart,
  calculateTotalCartItems,
  removeFromCart,
} from "../utils/cart";

const useCart = () => {
  const CART_LIMIT = 10;

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const prev_cart = localStorage.getItem("cart");
    if (prev_cart) setCart(JSON.parse(prev_cart));
  }, []);

  useEffect(() => {
    const quantity = calculateTotalCartItems(cart);
    setCartQuantity(quantity);
  }, [cart]);

  const handleAddToCart = (item, quantity) => {
    if (cartQuantity < 10) {
      const newCart = addToCart(cart, item, quantity);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (index) => {
    const newCart = removeFromCart(cart, index);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return {
    CART_LIMIT,
    cart,
    cartQuantity,
    showCart,
    setShowCart,
    handleAddToCart,
    handleRemoveFromCart,
  };
};

export default useCart;
