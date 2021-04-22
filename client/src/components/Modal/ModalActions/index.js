import { FaTimes } from "react-icons/fa";
import "./style.css";

const ModalActions = ({
  cartLimit,
  cartQuantity,
  itemQuantity,
  totalPrice,
  toggleModal,
  handleClick,
}) => {
  return (
    <div id="modal-actions">
      <button
        id="modal-close"
        type="button"
        onClick={() => toggleModal()}
        aria-label="Close modal"
      >
        <FaTimes size="30px" />
      </button>
      <button
        id="add-to-cart-btn"
        type="button"
        onClick={() => handleClick()}
        className={`${cartQuantity >= cartLimit ? "add-btn--disabled" : ""}`}
        disabled={cartQuantity >= cartLimit}
      >
        {cartQuantity >= cartLimit ? (
          <p>{`Your cart already contains ${cartLimit} items`}</p>
        ) : (
          <p>
            Add to Cart -{" "}
            <span>{`$${(itemQuantity * totalPrice).toFixed(2)}`}</span>
          </p>
        )}
      </button>
    </div>
  );
};

export default ModalActions;
