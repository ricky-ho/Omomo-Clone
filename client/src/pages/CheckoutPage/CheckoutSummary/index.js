import { useContext } from "react";
import { CartContext } from "../../../contexts/CartState";
import { calculateTotalItemPrice } from "../../../utils/cartUtils";
import {
  calculateOrderTotal,
  calculateTaxAmount,
} from "../../../utils/checkoutUtils";

import "./style.scss";

const CheckoutSummary = ({ subtotal }) => {
  const { cart } = useContext(CartContext);

  return (
    <section className="checkout__summary">
      <h2>ORDER SUMMARY</h2>
      <div className="checkout__summary-items">
        {cart.map((item) => (
          <SummaryItem {...{ item }} />
        ))}
      </div>
      <div className="checkout__summary-totals">
        <div>
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
        <div>
          <span>Tax</span>
          <span>{calculateTaxAmount(subtotal).toFixed(2)}</span>
        </div>
        <div>
          <span>Order Total</span>
          <span>{calculateOrderTotal(subtotal).toFixed(2)}</span>
        </div>
        <button type="submit" form="checkout-form">
          Place Order <span>{calculateOrderTotal(subtotal).toFixed(2)}</span>
        </button>
      </div>
    </section>
  );
};

const SummaryItem = ({ item }) => {
  return (
    <div className="summary-item">
      <div className="summary-item__header">
        <p>{item.product.name}</p>
        <p>
          {calculateTotalItemPrice(
            item,
            item.quantity,
            item.modifications
          ).toFixed(2)}
        </p>
      </div>
      <div className="summary-item__modifications">
        <p>Modifications</p>
        <ul>
          {Object.keys(item.modifications).map((group, index) => {
            const selection = item.modifications[group];

            if (Array.isArray(selection)) {
              return selection.map((opt, index) => {
                return (
                  <li key={index} data-group={group}>
                    <span>{opt.label}</span>
                  </li>
                );
              });
            }

            return (
              <li key={index} data-group={group}>
                <span>{selection.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSummary;
