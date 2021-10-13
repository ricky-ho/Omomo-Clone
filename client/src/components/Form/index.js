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

const Form = ({ toggleModal, product }) => {
  const { addToCart } = useContext(CartContext);
  const { quantity, options, selectedOptions } = useContext(ItemContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCartItem = {
      product: product,
      quantity: quantity,
      modifications: selectedOptions,
    };

    addToCart(newCartItem);
    toggleModal();
  };

  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <QuantityGroup quantity={quantity} />

      {options &&
        options.map((group, index) => {
          if (group.limit === -1) {
            return <CheckboxGroup key={index} {...{ group }} />;
          }

          return <SelectionGroup key={index} {...{ group }} />;
        })}

      <div>
        <button type="button" onClick={toggleModal}>
          Cancel
        </button>
        <button type="submit">Add To Cart</button>
      </div>
    </form>
  );
};

export default Form;
