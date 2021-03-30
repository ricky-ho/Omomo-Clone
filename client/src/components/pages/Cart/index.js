import React from "react";
import CartSummary from "./CartSummary";
import CartItems from "./CartItem";
import "./style.css";

const Cart = ({
  smallDisplay,
  cartItems,
  decrementItemQuantity,
  incrementItemQuantity,
  totalItems,
  totalPrice,
}) => {
  return (
    <main id="cart" className={smallDisplay ? "flex-col align-center" : "flex"}>
      <CartSummary
        smallDisplay={smallDisplay}
        items={cartItems}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
      <div
        className="flex-col align-center"
        id={smallDisplay ? "cart-display-sm" : "cart-display"}
      >
        {cartItems.length > 0 ? (
          <CartItems
            smallDisplay={smallDisplay}
            items={cartItems}
            decrementItemQuantity={decrementItemQuantity}
            incrementItemQuantity={incrementItemQuantity}
          />
        ) : (
          <div id="empty-cart" className="flex comm-text">
            YOUR CART IS CURRENTLY EMPTY
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
