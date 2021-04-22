import React, { useState, useEffect, useRef } from "react";
import { cloneDeep } from "lodash";

import {
  options as defaultOptions,
  calculateItemPrice,
  appendOptionsAndQuantity,
} from "../../utils/options";
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
  const coverStyle = {
    backgroundImage: `url(${item.imgModal})`,
  };

  const [totalPrice, setTotalPrice] = useState(item.price);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const newPrice = calculateItemPrice(item, options);
    setTotalPrice(newPrice);
  }, [options, itemQuantity, item]);

  const handleOptionsChange = (groupIndex, limit, selectedIndex) => {
    const newOptions = cloneDeep(options);
    const optionGroup = newOptions[groupIndex].opts;

    if (!limit) {
      let selected = optionGroup[selectedIndex].selected;
      optionGroup[selectedIndex].selected = !selected;
    } else {
      optionGroup.forEach((opt) => (opt.selected = false));
      optionGroup[selectedIndex].selected = true;
    }
    setOptions(newOptions);
  };

  const handleClick = () => {
    appendOptionsAndQuantity(item, options, totalPrice);
    handleAddToCart(item, itemQuantity);
    toggleModal();
  };

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target || e.key === "Escape") toggleModal();
  };

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
          <div id="item-cover" className="flex" style={coverStyle} />
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
          totalPrice={totalPrice}
          toggleModal={toggleModal}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Modal;
