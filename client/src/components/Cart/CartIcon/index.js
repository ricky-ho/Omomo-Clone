import "./style.css";

const CartIcon = ({ setShowCart, cartQuantity }) => {
  return (
    <>
      <button id="toggle-cart" type="button" onClick={() => setShowCart(true)}>
        <p>
          View Order <span>{`(${cartQuantity})`}</span>
        </p>
      </button>
    </>
  );
};

export default CartIcon;
