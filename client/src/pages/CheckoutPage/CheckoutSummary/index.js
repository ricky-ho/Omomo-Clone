import { useContext } from "react";
import { CgSpinner } from "react-icons/cg";

import { CartContext } from "../../../contexts/CartState";
import { calculateTotalCartItems } from "../../../utils/cartUtils";
import {
  calculatePostTaxOrderTotal,
  calculateTaxAmount,
} from "../../../utils/checkoutUtils";
import SummaryItem from "./SummaryItem";

import "./style.scss";

const CheckoutSummary = ({
  subtotal,
  isProcessing,
  paymentError,
  handlePaymentErrorMessage,
}) => {
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
        <div className="summary-row">
          <span>Subtotal</span>
          <span>{`$${subtotal.toFixed(2)}`}</span>
        </div>
        <div className="summary-row">
          <span>Tax</span>
          <span>{`$${calculateTaxAmount(subtotal).toFixed(2)}`}</span>
        </div>
        <div className="summary-row">
          <span>Order Total</span>
          <span>{`$${calculatePostTaxOrderTotal(subtotal).toFixed(2)}`}</span>
        </div>
        <div className="summary-btn__primary">
          <button type="submit" form="checkout-form" disabled={isProcessing}>
            {isProcessing ? (
              <span className={`submit-loader ${isProcessing ? "active" : ""}`}>
                <CgSpinner size={16} />
              </span>
            ) : (
              <>
                <span className="submit-text">Place Order</span>
                <span className="submit-text">{`$${calculatePostTaxOrderTotal(
                  subtotal
                ).toFixed(2)}`}</span>
              </>
            )}
          </button>
          <div className="payment-error">
            {paymentError ? <div>{handlePaymentErrorMessage()}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
