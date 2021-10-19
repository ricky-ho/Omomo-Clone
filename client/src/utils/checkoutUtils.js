const SALES_TAX = 0.095;

/**
 * Create a POST request to the server to handle validating and calculating the total price of the shopping cart
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
 * Given the subtotal of the shopping cart, calculate and return the total tax amount to be added
 * @param {Number} subtotal
 * @returns {Number}
 */
export const calculateTaxAmount = (subtotal) => {
  return +(subtotal * SALES_TAX).toFixed(2);
};

/**
 * Calculate the total cost of the order including tax
 * @param {Number} subtotal
 * @returns {Number}
 */
export const calculateOrderTotal = (subtotal) => {
  const taxAmount = calculateTaxAmount(subtotal);
  return +(subtotal + taxAmount).toFixed(2);
};

/**
 * Create a POST request to the server to create a Stripe PaymentIntent and return the client_secret or error object
 * @param {Number} subtotal
 * @returns {Object}
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
