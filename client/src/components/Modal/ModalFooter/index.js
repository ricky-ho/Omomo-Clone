import { useContext, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";

import { CartContext } from "../../../contexts/CartState";
import { ItemContext } from "../../../contexts/ItemState";

import "./style.scss";

const ModalFooter = ({
  toggleModal,
  setShowPopup,
  item,
  cartIndex,
  isEdit,
}) => {
  const { addToCart, editCartItem } = useContext(CartContext);
  const { quantity, selectedOptions, subtotal, calculateItemSubtotal } =
    useContext(ItemContext);

  useEffect(() => {
    calculateItemSubtotal(item);
  }, [item, quantity, selectedOptions]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCartItem = {
      product: item.product,
      quantity: quantity,
      modifications: selectedOptions,
      subtotal: subtotal,
    };

    if (isEdit) {
      editCartItem(cartIndex, newCartItem);
    } else {
      addToCart(newCartItem);
      setShowPopup(true);
    }

    toggleModal();
  };

  return (
    <section className="modal__footer">
      <div className="modal__actions">
        <button type="button" onClick={toggleModal}>
          <GrFormClose size={30} className="close-icon" />
        </button>
        <button type="button" onClick={handleFormSubmit}>
          {isEdit ? `Update Item - ` : `Add To Cart - `}
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </button>
      </div>
    </section>
  );
};

export default ModalFooter;
