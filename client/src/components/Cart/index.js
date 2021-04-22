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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const totalPrice = calculateTotalCartPrice(cart);
    setTotalCartPrice(totalPrice);
  }, [cart]);

  const wrapperRef = useRef();
  const closeCart = (e) => {
    if (wrapperRef.current === e.target) setShowCart(!showCart);
  };

  return (
    <div
      ref={wrapperRef}
      className={`cart-container`}
      onClick={(e) => closeCart(e)}
    >
      <div className={`cart ${smallDisplay ? "cart-sm" : ""}`}>
        <section id="cart-header">
          <h2>Shopping Cart</h2>
          <FaTimes
            className="close-btn"
            onClick={() => setShowCart(!showCart)}
          />
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
