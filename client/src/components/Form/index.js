import { useContext, useEffect, useReducer } from "react";

import CartContext from "../../contexts/cart-context";
import formReducer from "../../reducers/form-reducer";
import OptionGroup from "./OptionGroup";
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
  const initialState = {
    selectedOptions: defaultOptions,
    quantity: 1,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCartItem = {
      product: product,
      quantity: state.quantity,
      modifications: state.selectedOptions,
    };

    addToCart(newCartItem);
    toggleModal();
  };

  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <QuantityGroup quantity={state.quantity} dispatch={dispatch} />

      {options &&
        options.map((group, index) => {
          return <OptionGroup key={index} {...{ group, dispatch }} />;
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
