import { useState } from "react";
import useCart from "../../hooks/useCart";
import CartContext from "./cart-context";

const CartState = ({ children }) => {
  const CART_LIMIT = 10;
  const [showCart, setShowCart] = useState(false);

  const { cart, cartQuantity, handleAddToCart, handleRemoveFromCart } =
    useCart();

  return (
    <CartContext.Provider
      value={{
        CART_LIMIT,
        cart,
        cartQuantity,
        showCart,
        setShowCart,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
