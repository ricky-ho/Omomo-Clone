import { useContext, useEffect, useState } from "react";

import CartContext from "../../contexts/Cart/cart-context";

import "./style.scss";

/* Check that adding item to cart functions properly */

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <main id="cart">
      <div id="cart__wrapper">
        <div className="cart__list">
          <h1>Shopping Cart</h1>
          {cart.map((cartItem) => {
            const { product } = cartItem;
            return (
              <div key={product._id}>
                <img src={product.imageURL} alt={product.name} />
                <p>{product.name}</p>
                <p>{cartItem.quantity}</p>
              </div>
            );
          })}
        </div>

        <div id="cart__summary">
          <h2>Order Summary</h2>
          <div>
            <p>Total Items</p>
          </div>
          <div>
            <p>Total Price</p>
          </div>
          <form action="">
            <button type="button">Checkout</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
