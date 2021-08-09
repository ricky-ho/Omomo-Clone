import { FaTimes } from "react-icons/fa";
import "./style.css";

const ModalActions = ({
  cartLimit,
  cartQuantity,
  itemQuantity,
  itemPrice,
  toggleModal,
  handleSubmit,
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
        onClick={() => handleSubmit()}
        className={`${cartQuantity >= cartLimit ? "add-btn--disabled" : ""}`}
        disabled={cartQuantity >= cartLimit}
      >
        {cartQuantity >= cartLimit ? (
          <p>{`Online cart has a limit of ${cartLimit} items`}</p>
        ) : (
          <p>
            Add to Cart -{" "}
            <span>{`$${(itemQuantity * itemPrice).toFixed(2)}`}</span>
          </p>
        )}
      </button>
    </div>
  );
};

export default ModalActions;
