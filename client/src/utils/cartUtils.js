/**
 * Retrieve the user's most recent cart state from previous sessions
 * @returns {Object} cart
 */
export const getLocalStorage = () => {
  let prevCart = localStorage.getItem("cart");

  if (!prevCart) return [];

  return JSON.parse(prevCart);
};

/**
 * Calculate the total price of the shopping cart
 * @param {Object[]} cart
 * @returns {Number} totalPrice
 */
export const calculateTotalCartPrice = (cart) => {
  if (!cart || cart.length === 0) return 0;

  console.log(typeof cart);
  let totalPrice = cart.reduce((sum, item) => {
    let itemPrice = calculateTotalItemPrice(item);
    return (sum += itemPrice);
  }, 0);

  return totalPrice;
};

/**
 * Calculate the total price of the cart item (includes base price plus all modification prices i.e. toppings multiplied by the quantity)
 * @param {Object} item
 * @returns {Number} itemPrice
 */
export const calculateTotalItemPrice = (item) => {
  let basePrice = item.product.price;
  let extraCharges = 0;

  const modifications = Object.entries(item.modifications);
  modifications.forEach((group) => {
    const [, selected] = group;

    if (Array.isArray(selected)) {
      selected.forEach((option) => (extraCharges += option.price));
    } else {
      extraCharges += selected.price;
    }
  });

  return (basePrice + extraCharges) * item.quantity;
};

/**
 * Calculate the total number of items in the shopping cart
 * @param {Object[]} cart
 * @returns {Number} totalItems
 */
export const calculateTotalCartItems = (cart) => {
  let totalItems = cart.reduce((sum, item) => (sum += item.quantity), 0);

  return totalItems;
};
