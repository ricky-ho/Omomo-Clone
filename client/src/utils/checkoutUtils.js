const SALES_TAX = 0.095;

/**
 *
 * @param {Object[]} cart
 * @returns {Object}
 */
export const validateCartTotal = async (cart) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    };

    const response = await fetch(`/api/checkout`, options);

    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @param {*} subtotal
 * @returns
 */
export const calculateTaxAmount = (subtotal) => {
  return +(subtotal * SALES_TAX).toFixed(2);
};

/**
 *
 * @param {*} subtotal
 * @returns
 */
export const calculateOrderTotal = (subtotal) => {
  return +(subtotal + subtotal * SALES_TAX).toFixed(2);
};

/**
 *
 * @param {*} subtotal
 * @returns
 */
export const createPaymentIntent = async (subtotal) => {
  try {
    const response = await fetch("/api/checkout/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalAmount: calculateOrderTotal(subtotal),
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
 *
 * @param {*} stripe
 * @param {*} client_secret
 * @param {*} cardInfo
 * @param {*} userInfo
 * @returns
 */
export const confirmPaymentIntent = async (
  stripe,
  client_secret,
  cardInfo,
  userInfo
) => {
  try {
    const paymentIntent = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardInfo,
        billing_details: userInfo,
      },
    });

    return paymentIntent;
  } catch (error) {
    return Promise.reject(error);
  }
};
