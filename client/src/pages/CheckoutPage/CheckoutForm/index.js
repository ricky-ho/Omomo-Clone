import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

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
  setStatus,
}) => {
  const elements = useElements();
  const stripe = useStripe();

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
        console.error(paymentIntent.error);
        setPaymentError(paymentIntent.error);
        return;
      }
      console.log(paymentIntent);
      savePaymentIntent(paymentIntent);
    }

    const cardInfo = elements.getElement(CardElement);
    const userInfo = {
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    /* Use Stripe to confirm the PaymentIntent */
    const { error, paymentIntent: latestPaymentIntent } =
      await confirmPaymentIntent(
        stripe,
        paymentIntent.client_secret,
        cardInfo,
        userInfo
      );

    if (error) {
      console.error(error);
      setPaymentError(error);
    } else {
      console.log(latestPaymentIntent);
      savePaymentIntent(latestPaymentIntent);
      setPaymentError(null);
      setStatus(latestPaymentIntent.status);
    }

    setIsProcessing(false);
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
