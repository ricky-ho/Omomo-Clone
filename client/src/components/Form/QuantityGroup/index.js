import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from "../../../reducers/form-actions";
import "./style.scss";

const QuantityGroup = ({ quantity, dispatch }) => {
  return (
    <fieldset name="quantity">
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: DECREMENT_QUANTITY,
          })
        }
        disabled={quantity <= 1}
      >
        -
      </button>
      <input type="number" value={quantity} readOnly />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: INCREMENT_QUANTITY,
          })
        }
      >
        +
      </button>
    </fieldset>
  );
};

export default QuantityGroup;
