import "./style.scss";

const QuantityInput = ({ quantity, setQuantity }) => {
  return (
    <fieldset name="quantity">
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </fieldset>
  );
};

export default QuantityInput;
