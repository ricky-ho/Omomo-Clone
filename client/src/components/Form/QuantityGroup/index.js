import { useState, useContext, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
    <fieldset className="quantity__fieldset" name="quantity">
      <button type="button" onClick={handleDecrement} disabled={quantity < 2}>
        <FiMinus size={18} />
      </button>
      <input type="number" value={quantity} readOnly />
      <button type="button" onClick={handleIncrement}>
        <FiPlus size={18} />
      </button>
    </fieldset>
  );
};

export default QuantityGroup;
