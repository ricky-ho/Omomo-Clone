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

  let totalPrice = cart.reduce((sum, item) => {
    let itemPrice = calculateTotalItemPrice(
      item,
      item.quantity,
      item.modifications
    );
    return (sum += itemPrice);
  }, 0);

  return totalPrice;
};

/**
 * Calculate the total price of the cart item (includes base price plus all modification prices i.e. toppings multiplied by the quantity)
 * @param {Object} item
 * @returns {Number} itemPrice
 */
export const calculateTotalItemPrice = (item, quantity, modifications) => {
  let basePrice = item.product.price;
  let extraCharges = 0;

  if (modifications) {
    const modType = Object.entries(modifications);
    modType.forEach((group) => {
      const [, selected] = group;

      if (Array.isArray(selected)) {
        selected.forEach((option) => (extraCharges += option.price));
      } else {
        extraCharges += selected.price;
      }
    });
  }

  return (basePrice + extraCharges) * quantity;
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
