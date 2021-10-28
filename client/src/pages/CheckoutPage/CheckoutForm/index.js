import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { CartContext } from "../../../contexts/CartState";
import { confirmValidFormInputs } from "../../../utils/checkoutUtils";
import {
  createPaymentIntent,
  confirmPaymentIntent,
  getExistingPaymentIntent,
  savePaymentIntent,
} from "../../../utils/paymentUtils";
import ContactField from "./ContactField";
import PaymentField from "./PaymentField";

import "./style.scss";

const CheckoutForm = ({
  subtotal,
  isProcessing,
  setIsProcessing,
  setPaymentError,
  setAppStatus,
}) => {
  const { clearCart } = useContext(CartContext);

  const elements = useElements();
  const stripe = useStripe();
  const history = useHistory();

  const [formErrorMessages, setFormErrorMessages] = useState({
    name: null,
    phone: null,
    email: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    /* Confirm form inputs are valid before submitting */
    const isValid = confirmValidFormInputs(setFormErrorMessages);
    if (!isValid) return;

    setIsProcessing(true);

    /* Check if the user has a PaymentIntent already in LocalStorage */
    let paymentIntent = getExistingPaymentIntent();

    /* If not, create a new Stripe PaymentIntent on the server and retrieve the client secret */
    if (!paymentIntent) {
      paymentIntent = await createPaymentIntent(subtotal);

      if (paymentIntent.error) {
        setPaymentError(paymentIntent.error);
        return;
      }
      savePaymentIntent(paymentIntent);
    }

    const cardInfo = elements.getElement(CardElement);
    const userInfo = {
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    /* Use Stripe to confirm the PaymentIntent on the client-side */
    const { error, paymentIntent: latestPaymentIntent } =
      await confirmPaymentIntent(
        stripe,
        paymentIntent.client_secret,
        cardInfo,
        userInfo
      );

    if (error) {
      setPaymentError(error);
      setIsProcessing(false);
      return;
    }

    savePaymentIntent(latestPaymentIntent);
    setAppStatus(latestPaymentIntent.status);
    setPaymentError(null);
    clearCart();
    history.push("/order-confirmation");
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit}>
      <ContactField
        {...{
          isProcessing,
          formErrorMessages,
          setFormErrorMessages,
        }}
      />
      <PaymentField />
    </form>
  );
};

export default CheckoutForm;
