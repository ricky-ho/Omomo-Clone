import { useContext, useEffect, useState } from "react";

import CartContext from "../../contexts/cart-context";
import Card from "../../components/Card";
import { calculateTotalCartPrice } from "../../utils/cartUtils";

import "./style.scss";

/* Check that adding item to cart functions properly */

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = calculateTotalCartPrice(cart);
    setTotalPrice(total);
  }, [cart]);

  const CartList = () => {
    return (
      <section className="cart__list">
        {cart.length > 0 ? (
          <div className="cart__items">
            {cart.map((cartItem, index) => {
              return <Card key={index} index={index} item={cartItem} />;
            })}
          </div>
        ) : (
          <div className="cart__empty">
            <h2>Your cart is currently empty</h2>
          </div>
        )}
      </section>
    );
  };

  const CartSummary = () => {
    return cart.length > 0 ? (
      <section className="cart__summary">
        <h2>ORDER SUMMARY</h2>
        <div>
          <p>Total Items</p>
          <p>{cart.length}</p>
        </div>
        <div>
          <p>Order Total</p>
          <p className="order__total">{`$${totalPrice.toFixed(2)}`}</p>
        </div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <button type="submit">Checkout</button>
        </form>
      </section>
    ) : null;
  };

  return (
    <main id="cart">
      <div className="cart__wrapper">
        <h1>SHOPPING CART</h1>
        <div className="cart__inner">
          <CartList />
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
