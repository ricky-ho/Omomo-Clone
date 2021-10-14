import { useState, useContext } from "react";

import { CartContext } from "../../contexts/CartState";
import Card from "../../components/Card";

import "./style.scss";
import Modal from "../../components/Modal";

/* 
  TODO: 
  - Add edit cart item functionality
  - Add edit cart item quantity functionality
*/

const CartPage = () => {
  const { cart, totalPrice, totalItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [cartIndex, setCartIndex] = useState(null);

  const toggleModal = () => setShowModal(!showModal);
  const editCartItem = (index) => setCartIndex(index);

  const CartList = () => {
    return (
      <section className="cart__list">
        {cart.length > 0 ? (
          <div className="cart__items">
            {cart.map((cartItem, index) => {
              return (
                <Card
                  key={index}
                  item={cartItem}
                  {...{ index, toggleModal, editCartItem }}
                />
              );
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
    return totalItems > 0 ? (
      <section className="cart__summary">
        <h2>ORDER SUMMARY</h2>
        <div>
          <p>Total Items</p>
          <p>{totalItems}</p>
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
      <Modal
        {...{ showModal, toggleModal, cartIndex }}
        item={cart[cartIndex]}
        isEdit={true}
      />
    </main>
  );
};

export default CartPage;
