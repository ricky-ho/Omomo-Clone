import Checkbox from "../Checkbox";

import "./styles.css";

const ModalForm = ({
  cartLimit,
  cartQuantity,
  itemQuantity,
  handleQuantityChange,
  options,
  handleOptionsChange,
}) => {
  return (
    <form id="modal-form" action="">
      <section id="quantity-form" className="form-group">
        <label htmlFor="quantity" className="flex">
          <button
            type="button"
            className={`quantity-btn
                    ${itemQuantity <= 1 ? "quantity-btn--disabled" : ""}`}
            disabled={itemQuantity <= 1}
            onClick={() => handleQuantityChange(itemQuantity - 1)}
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
              itemQuantity >= cartLimit ||
              cartQuantity + itemQuantity >= cartLimit
            }
            onClick={() => handleQuantityChange(itemQuantity + 1)}
          >
            <span>+</span>
          </button>
        </label>
        <div className="limit-notice">
          <p>{`Online orders are limited to ${cartLimit} items.`}</p>
        </div>
      </section>
      {options.map((group, index) => {
        return (
          <Checkbox
            key={index}
            id={index}
            optionGroup={group}
            handleOptionsChange={handleOptionsChange}
          />
        );
      })}
    </form>
  );
};

export default ModalForm;
