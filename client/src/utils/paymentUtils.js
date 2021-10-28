import { calculatePostTaxOrderTotal } from "./checkoutUtils";

/**
 * Check the browser LocalStorage for an existing PaymentIntent and return it. Otherwise, we return null.
 * @returns {Object} currentPaymentIntent
 */
export const getExistingPaymentIntent = () => {
  const paymentIntent = localStorage.getItem("payment_intent");

  if (!paymentIntent) {
    return null;
  }

  const currentPaymentIntent = JSON.parse(paymentIntent);
  if (currentPaymentIntent.status === "succeeded") {
    return null;
  }

  return currentPaymentIntent;
};

/**
 * Save the Stripe PaymentIntent id, status, and client_secret to LocalStorage
 * @param {Object} paymentIntent
 */
export const savePaymentIntent = (paymentIntent) => {
  if (!paymentIntent) return;

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
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/checkout/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalAmount: calculatePostTaxOrderTotal(subtotal),
          currency: "usd",
          paymentMethodTypes: ["card"],
        }),
      }
    );

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
    const response = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardInfo,
        billing_details: userInfo,
      },
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
