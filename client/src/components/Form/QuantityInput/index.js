import "./style.scss";

const QuantityInput = ({ quantity, setQuantity }) => {
  return (
    <fieldset name="quantity">
      <input type="number" value={quantity} onChange={() => setQuantity()} />
    </fieldset>
  );
};

export default QuantityInput;
