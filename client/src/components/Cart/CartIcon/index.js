import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

const CartIcon = ({ setShowCart, cartQuantity }) => {
  return (
    <>
      <button
        id="toggle-cart"
        type="button"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <FaShoppingCart size="25px" className="fa-shopping-cart" />
        {cartQuantity > 0 ? (
          <div className="quantity-icon">
            <p>{cartQuantity}</p>
          </div>
        ) : null}
      </button>
    </>
  );
};

export default CartIcon;
