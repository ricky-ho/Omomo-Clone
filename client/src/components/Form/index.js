import { useContext, useEffect, useState } from "react";

import CartContext from "../../contexts/cart-context";
import FormGroup from "./FormGroup";
import QuantityGroup from "./QuantityGroup";

import "./style.scss";

/*
  TODO: 
  - Add indicator that item has been added to cart
*/

const Form = ({ toggleModal, options, product }) => {
  const { addToCart } = useContext(CartContext);
  const defaultOptions = {
    [options[0].label]: options[0].options[0],
    [options[1].label]: options[1].options[0],
    [options[2].label]: options[2].options[0],
    [options[3].label]: [],
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);

  const addSelectedOptions = (group, newOption) => {
    const newSelectedOptions = {
      ...selectedOptions,
      [group]: newOption,
    };

    setSelectedOptions(newSelectedOptions);
  };

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

  /* DELETE THIS BEFORE PRODUCTION */
  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <QuantityGroup {...{ quantity, setQuantity }} />

      {options &&
        options.map((group, index) => {
          return <FormGroup key={index} {...{ group, addSelectedOptions }} />;
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
