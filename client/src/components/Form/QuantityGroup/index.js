import { useState, useContext, useEffect } from "react";

import { ItemContext } from "../../../contexts/ItemState";

import "./style.scss";

const QuantityGroup = ({ item }) => {
  const { setItemQuantity } = useContext(ItemContext);

  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <fieldset name="quantity">
      <button type="button" onClick={handleDecrement} disabled={quantity < 2}>
        -
      </button>
      <input type="number" value={quantity} readOnly />
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </fieldset>
  );
};

export default QuantityGroup;
