import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  createPaymentIntent,
  confirmPaymentIntent,
} from "../../../utils/checkoutUtils";

import "./style.scss";

const CheckoutForm = ({ subtotal, setError }) => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error: serverError, client_secret } = await createPaymentIntent(
      subtotal
    );

    if (serverError) {
      console.error(serverError);
      setError(serverError);
    }

    const cardInfo = elements.getElement(CardElement);
    const userInfo = {
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      email: e.target.email.value,
    };

    const { error: stripeError, paymentIntent } = await confirmPaymentIntent(
      stripe,
      client_secret,
      cardInfo,
      userInfo
    );

    if (stripeError) {
      console.error(stripeError);
      setError(stripeError);
    } else {
      console.log(paymentIntent);
    }
    // const { error: stripeError, paymentIntent } =
    //   await stripe.confirmCardPayment(client_secret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //       billing_details: {
    //         name: `${e.target.firstName.value} ${e.target.lastName.value}`,
    //         email: e.target.email.value,
    //       },
    //     },
    //   });

    // if (stripeError) {
    //   console.error(stripeError);
    //   setError(stripeError);
    // } else {
    //   console.log(paymentIntent);
    // }
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit}>
      <fieldset>
        Contact
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label htmlFor="first-name">Last Name</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
      </fieldset>

      <fieldset>
        Secure Payment
        <p>All payments are processed using Stripe</p>
        <div>
          <label htmlFor="card-element">Card</label>
          <CardElement id="card-element" />
        </div>
      </fieldset>
    </form>
  );
};

export default CheckoutForm;
