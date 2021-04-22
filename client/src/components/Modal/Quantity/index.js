import "./style.css";

const Quantity = ({
  cartLimit,
  cartQuantity,
  itemQuantity,
  handleQuantityChange,
}) => {
  return (
    <label htmlFor="quantity" className="flex">
      <button
        type="button"
        className={`quantity-btn
                    ${itemQuantity <= 1 ? "quantity-btn--disabled" : ""}`}
        disabled={itemQuantity <= 1}
        onClick={() => handleQuantityChange(itemQuantity - 1)}
        aria-label="Decrease quantity by 1 on each click"
      >
        <span>-</span>
      </button>
      <input
        id="quantity"
        type="number"
        value={itemQuantity}
        onChange={handleQuantityChange}
        disabled
      ></input>
      <button
        type="button"
        className={`quantity-btn
                    ${
                      cartQuantity + itemQuantity >= cartLimit
                        ? "quantity-btn--disabled"
                        : ""
                    }`}
        disabled={
          itemQuantity >= cartLimit || cartQuantity + itemQuantity >= cartLimit
        }
        onClick={() => handleQuantityChange(itemQuantity + 1)}
        aria-label="Increase quantity by 1 on each click"
      >
        <span>+</span>
      </button>
    </label>
  );
};

export default Quantity;
