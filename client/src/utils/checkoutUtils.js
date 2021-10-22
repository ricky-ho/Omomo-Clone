import { validEmailInput, validNameInput, validPhoneInput } from "./formUtils";

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
  const SALES_TAX = 0.095;
  return +(subtotal * SALES_TAX).toFixed(2);
};

/**
 * Calculate the total cost of the order including tax
 * @param {Number} subtotal
 * @returns {Number}
 */
export const calculatePostTaxOrderTotal = (subtotal) => {
  const taxAmount = calculateTaxAmount(subtotal);
  return +(subtotal + taxAmount).toFixed(2);
};

/**
 * Confirm that the contact form inputs are valid. If they are invalid, create the error messages using the provided errorHandler and return false. Otherwise return true if valid.
 * @param {Function} errorHandler
 */
export const confirmValidFormInputs = (errorHandler) => {
  const firstName = document.getElementById("input_firstName").value;
  const lastName = document.getElementById("input_lastName").value;
  const phoneNumber = document.getElementById("input_phone").value;
  const email = document.getElementById("input_email").value;

  const validFirstName = validNameInput(firstName);
  const validLastName = validNameInput(lastName);
  const validPhoneNumber = validPhoneInput(phoneNumber);
  const validEmail = validEmailInput(email);

  if (!validFirstName || !validLastName || !validPhoneNumber || !validEmail) {
    errorHandler({
      name:
        !validFirstName || !validLastName
          ? "Please provide your first and last name"
          : null,
      phone: !validPhoneNumber ? "Please provide a valid phone number" : null,
      email: !validEmail ? "Please provide a valid email address" : null,
    });
    return false;
  }

  errorHandler({
    name: null,
    phone: null,
    email: null,
  });
  return true;
};
