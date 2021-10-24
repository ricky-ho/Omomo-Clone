import { useState, useContext } from "react";

import { CartContext } from "../../contexts/CartState";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import Modal from "../../components/Modal";

import "./style.scss";

const CartPage = () => {
  const { cart, totalPrice, totalItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [cartIndex, setCartIndex] = useState(null);

  const toggleModal = () => setShowModal(!showModal);
  const editCartItem = (index) => setCartIndex(index);

  return (
    <main id="cart">
      <div className="cart__wrapper">
        <h1>SHOPPING CART</h1>
        <div className="cart__inner">
          <CartList {...{ toggleModal, editCartItem, cart }} />
          <CartSummary {...{ totalPrice, totalItems }} />
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
