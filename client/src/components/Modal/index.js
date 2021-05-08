import React, { useEffect, useRef } from "react";

import useItem from "../../hooks/useItem";
import { appendOptionsAndQuantity } from "../../utils/options";
import ModalForm from "./ModalForm";
import ModalActions from "./ModalActions";
import "./style.css";

function Modal({
  smallDisplay,
  toggleModal,
  item,
  cartLimit,
  cartQuantity,
  handleAddToCart,
}) {
  const {
    itemCover,
    itemPrice,
    itemQuantity,
    options,
    setItemQuantity,
    handleOptionsChange,
  } = useItem(item);

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target || e.key === "Escape") toggleModal();
  };

  const handleSubmit = () => {
    appendOptionsAndQuantity(item, options, itemPrice);
    handleAddToCart(item, itemQuantity);
    toggleModal();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      onKeyDown={closeModal}
      className="modal"
    >
      <div
        className={`modal-content ${smallDisplay ? "modal-content--sm" : ""}`}
      >
        <div className="flex-col">
          <div id="item-cover" className="flex" style={itemCover} />
          <h2 id="item-name">{item.name}</h2>
          <p id="item-description">{item.description}</p>
          <ModalForm
            cartLimit={cartLimit}
            cartQuantity={cartQuantity}
            itemQuantity={itemQuantity}
            handleQuantityChange={setItemQuantity}
            options={options}
            handleOptionsChange={handleOptionsChange}
          />
        </div>
        <ModalActions
          cartLimit={cartLimit}
          cartQuantity={cartQuantity}
          itemQuantity={itemQuantity}
          itemPrice={itemPrice}
          toggleModal={toggleModal}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Modal;
