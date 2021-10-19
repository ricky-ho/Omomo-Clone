import { Link } from "react-router-dom";

const CartSummary = ({ totalPrice, totalItems }) => {
  return totalItems > 0 ? (
    <section className="cart__summary">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p>Total Items</p>
        <p>{totalItems}</p>
      </div>
      <div>
        <p>Order Total</p>
        <p className="order__total">{`$${totalPrice.toFixed(2)}`}</p>
      </div>
      <div className="summary__actions">
        <Link to="/checkout" className="checkout-link">
          Checkout
        </Link>
        <Link to="/menu">Continue shopping</Link>
      </div>
    </section>
  ) : null;
};

export default CartSummary;
