import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from "../../../reducers/form-actions";
import "./style.scss";

const QuantityGroup = ({ quantity, dispatch }) => {
  const increment = () => {
    dispatch({
      type: INCREMENT_QUANTITY,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_QUANTITY,
    });
  };

  return (
    <fieldset name="quantity">
      <button type="button" onClick={decrement} disabled={quantity <= 1}>
        -
      </button>
      <input type="number" value={quantity} readOnly />
      <button type="button" onClick={increment}>
        +
      </button>
    </fieldset>
  );
};

export default QuantityGroup;
