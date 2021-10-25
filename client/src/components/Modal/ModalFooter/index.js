import { useState, useContext, useEffect } from "react";

import { GrFormClose } from "react-icons/gr";
import { CartContext } from "../../../contexts/CartState";
import { ItemContext } from "../../../contexts/ItemState";
import { calculateTotalItemPrice } from "../../../utils/cartUtils";

import "./style.scss";

const ModalFooter = ({
  toggleModal,
  setShowPopup,
  item,
  cartIndex,
  isEdit,
}) => {
  const { addToCart, editCartItem } = useContext(CartContext);
  const { quantity, selectedOptions } = useContext(ItemContext);

  const [itemSubtotal, setItemSubtotal] = useState(0);

  useEffect(() => {
    const subtotal = calculateTotalItemPrice(item, quantity, selectedOptions);
    setItemSubtotal(subtotal);
  }, [item, quantity, selectedOptions]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCartItem = {
      product: item.product,
      quantity: quantity,
      modifications: selectedOptions,
    };

    if (isEdit) {
      editCartItem(cartIndex, newCartItem);
    } else {
      addToCart(newCartItem);
    }

    toggleModal();
    setShowPopup(true);
  };

  return (
    <section className="modal__footer">
      <div className="modal__actions">
        <button type="button" onClick={toggleModal}>
          <GrFormClose size={30} className="close-icon" />
        </button>
        <button type="button" onClick={(e) => handleSubmit(e)}>
          {isEdit ? `Update Item - ` : `Add To Cart - `}
          <span>{`$${itemSubtotal.toFixed(2)}`}</span>
        </button>
      </div>
    </section>
  );
};

export default ModalFooter;
