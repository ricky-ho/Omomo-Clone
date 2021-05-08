import CartItem from "../CartItem";

import "./style.css";

const CartItems = ({ smallDisplay, cart, handleRemoveFromCart }) => {
  return (
    <section id="cart-items">
      {cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            smallDisplay={smallDisplay}
            index={index}
            item={item}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        );
      })}
    </section>
  );
};

export default CartItems;
