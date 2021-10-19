import {
  calculateOrderTotal,
  calculateTaxAmount,
} from "../../../utils/checkoutUtils";

const CheckoutSummary = ({ subtotal }) => {
  return (
    <div className="checkout__summary">
      <div>Order Summary</div>
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
        Confirm Payment
      </button>
    </div>
  );
};

export default CheckoutSummary;
