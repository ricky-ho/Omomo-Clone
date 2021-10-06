import { useContext, useEffect, useState } from "react";

import { getOptions } from "../../utils/menuUtils";
import CartContext from "../../contexts/Cart/cart-context";
import ModificationInput from "./ModificationInput";
import QuantityInput from "./QuantityInput";

import "./style.scss";

/*
  TODO: 
  - Handle logic to append selected options to the product to insert into cart
  - Add indicator that item has been added to cart
*/

const Form = ({ toggleModal, options, product }) => {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addSelectedOptions = (newOption) => {
    setSelectedOptions([...selectedOptions, newOption]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCartItem = {
      product: product,
      quantity: quantity,
      modifications: selectedOptions,
    };

    console.log(`Adding item to cart`, newCartItem);

    addToCart(newCartItem);
    toggleModal();
  };

  return (
    <form action="" className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <QuantityInput {...{ quantity, setQuantity }} />
      {options &&
        options.map((group, index) => {
          return (
            <ModificationInput
              key={index}
              limit={group.limit}
              {...{ group, addSelectedOptions }}
            />
          );
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
