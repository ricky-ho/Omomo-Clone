import Checkbox from "../Checkbox";
import Quantity from "../Quantity";

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
        <Quantity
          cartLimit={cartLimit}
          cartQuantity={cartQuantity}
          itemQuantity={itemQuantity}
          handleQuantityChange={handleQuantityChange}
        />
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
