import { useContext } from "react";

import { CartContext } from "../../contexts/CartState";
import { ItemContext } from "../../contexts/ItemState";
import QuantityGroup from "./QuantityGroup";
import SelectionGroup from "./SelectionGroup";
import CheckboxGroup from "./CheckboxGroup";

import "./style.scss";

/*
  TODO: 
  - Add indicator that item has been added to cart
*/

const Form = ({ toggleModal, cartIndex, item, isEdit }) => {
  const { addToCart, editCartItem } = useContext(CartContext);
  const { quantity, options, selectedOptions } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const edittedCartItem = {
        product: item.product,
        quantity: quantity,
        modifications: selectedOptions,
      };
      editCartItem(cartIndex, edittedCartItem);
    } else {
      const newCartItem = {
        product: item.product,
        quantity: quantity,
        modifications: selectedOptions,
      };
      console.log("ADD ITEM", newCartItem);
      addToCart(newCartItem);
    }

    toggleModal();
  };

  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <QuantityGroup {...{ item, quantity }} />

      {options &&
        options.map((group, index) => {
          if (group.limit === -1) {
            return <CheckboxGroup key={index} {...{ item, group }} />;
          }

          return <SelectionGroup key={index} {...{ item, group }} />;
        })}

      <div>
        <button type="button" onClick={toggleModal}>
          Cancel
        </button>
        <button type="submit">{isEdit ? "Update Item" : "Add To Cart"}</button>
      </div>
    </form>
  );
};

export default Form;
