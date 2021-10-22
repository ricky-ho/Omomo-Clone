import { calculatePostTaxOrderTotal } from "./checkoutUtils";

/* TODO: Check localStorage for PaymentIntent */
export const getExistingPaymentIntent = () => {
  const paymentIntent = localStorage.getItem("payment_intent");

  if (!paymentIntent) {
    console.log("PaymentIntent not found in LocalStorage");
    return null;
  }

  const currentPaymentIntent = JSON.parse(paymentIntent);
  console.log("CurrentPaymentIntent:", currentPaymentIntent);
  if (currentPaymentIntent.status === "succeeded") {
    console.log("PaymentIntent has already succeeded and cannot be used again");
    return null;
  }

  console.log("Found paymentIntent in LocalStorage");
  return currentPaymentIntent;
};

/* TODO: After creating or successful purchase, update the status of the payment intent */
export const savePaymentIntent = (paymentIntent) => {
  console.log(
    `Saving PaymentIntent information: ${paymentIntent.id} , ${paymentIntent.status}`
  );
  localStorage.setItem(
    "payment_intent",
    JSON.stringify({
      id: paymentIntent.id,
      status: paymentIntent.status,
      client_secret: paymentIntent.client_secret,
    })
  );
};

/**
 * Create a POST request to the server to create a Stripe PaymentIntent and return the client_secret or error object
 * @param {Number} subtotal
 * @returns {Object}
 */

export const createPaymentIntent = async (subtotal) => {
  console.log("Creating new PaymentIntent");
  try {
    const response = await fetch("/api/checkout/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalAmount: calculatePostTaxOrderTotal(subtotal),
        currency: "usd",
        paymentMethodTypes: ["card"],
      }),
    });

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Use the stripe API confirmCardPayment method to handle payment validation and confirmation
 * @param {Object} stripe
 * @param {String} client_secret
 * @param {Object} cardInfo
 * @param {Object} userInfo
 * @returns {Object}
 */
export const confirmPaymentIntent = async (
  stripe,
  client_secret,
  cardInfo,
  userInfo
) => {
  try {
    console.log("Confirming paymentIntent");
    const response = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardInfo,
        billing_details: userInfo,
      },
    });

    console.log(response);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
