import { CardElement } from "@stripe/react-stripe-js";
import { FaLock } from "react-icons/fa";

const PaymentField = () => {
  /* TODO: Check that payment field is non-empty before submitting? */
  return (
    <fieldset className="checkout-form__payment-field">
      <legend>
        <p>
          SECURE PAYMENT
          <span>
            <FaLock size={11} />
          </span>
        </p>
        <p>
          All payments are secured and handled by{" "}
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe
          </a>
        </p>
      </legend>

      <div className="form-row" id="card-number">
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "gray",
              },
              invalid: {
                color: "red",
                iconColor: "red",
              },
            },
          }}
        />
      </div>
    </fieldset>
  );
};
export default PaymentField;
