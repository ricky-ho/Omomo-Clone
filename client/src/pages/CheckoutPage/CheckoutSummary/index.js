import { useContext } from "react";
import { CartContext } from "../../../contexts/CartState";
import {
  calculateOrderTotal,
  calculateTaxAmount,
} from "../../../utils/checkoutUtils";
import SummaryItem from "./SummaryItem";

import "./style.scss";
import { calculateTotalCartItems } from "../../../utils/cartUtils";

const CheckoutSummary = ({ subtotal, isProcessing }) => {
  const { cart } = useContext(CartContext);

  return (
    <section className="checkout__summary">
      <h2>
        <span>ORDER SUMMARY</span>
        <span>{`(${calculateTotalCartItems(cart)} ITEMS)`}</span>
      </h2>
      <div className="checkout__summary-items">
        {cart.map((item, index) => (
          <SummaryItem key={index} {...{ item }} />
        ))}
      </div>
      <div className="checkout__summary-totals">
        <div>
          <span>Subtotal</span>
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </div>
        <div>
          <span>Tax</span>
          <span>{`$${calculateTaxAmount(subtotal).toFixed(2)}`}</span>
        </div>
        <div>
          <span>Order Total</span>
          <span>{`$${calculateOrderTotal(subtotal).toFixed(2)}`}</span>
        </div>
        <button type="submit" form="checkout-form" disabled={isProcessing}>
          {isProcessing ? (
            <span
              className={`submit-loader ${isProcessing ? "active" : ""}`}
            ></span>
          ) : (
            <>
              <span className="submit-text">Place Order</span>
              <span className="submit-text">{`$${calculateOrderTotal(
                subtotal
              ).toFixed(2)}`}</span>
            </>
          )}
        </button>
        <div>
          <button type="button" disabled={isProcessing}>
            Demo - Successful Payment
          </button>
          <button type="button" disabled={isProcessing}>
            Demo - Unsuccessful Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
