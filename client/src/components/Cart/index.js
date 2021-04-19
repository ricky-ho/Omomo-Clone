import { useState, useEffect, useRef } from "react";

import CartItems from "./CartItems";
import { FaTimes } from "react-icons/fa";
import { calculateTotalCartPrice } from "../../utils/cart";
import "./style.css";

const Cart = ({
  smallDisplay,
  cart,
  cartQuantity,
  handleRemoveFromCart,
  handleChangeItemQuantity,
  showCart,
  setShowCart,
}) => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const totalPrice = calculateTotalCartPrice(cart);
    setTotalCartPrice(totalPrice);
  }, [cart]);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [showCart]);

  const wrapperRef = useRef();
  const closeCart = (e) => {
    if (wrapperRef.current === e.target) setShowCart(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`cart-container ${showCart ? "container-active" : ""}`}
      onClick={(e) => closeCart(e)}
    >
      <div
        className={`cart
          ${smallDisplay ? "cart-sm" : ""} 
          ${showCart ? "cart-active" : ""}
          `}
      >
        <section id="cart-header">
          <h2>Shopping Cart</h2>
          <FaTimes className="close-btn" onClick={() => setShowCart(false)} />
        </section>
        {cartQuantity > 0 ? (
          <>
            <CartItems
              smallDisplay={smallDisplay}
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleChangeItemQuantity={handleChangeItemQuantity}
            />
            <section id="cart-actions">
              <div>
                <h3>{`Subtotal (${cartQuantity})`}</h3>
                <p>{`$${totalCartPrice.toFixed(2)}`}</p>
              </div>
              <button id="cart-checkout" type="button">
                <span>Checkout</span>
              </button>
              <button
                id="continue-shopping"
                type="button"
                onClick={() => setShowCart(!showCart)}
              >
                <span>Continue shopping</span>
              </button>
            </section>
          </>
        ) : (
          <p>Your cart is currently empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
