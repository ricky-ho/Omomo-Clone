/**
 * Calculate the total price of the shopping cart
 * @param {Object[]} cart
 * @returns {Number} totalPrice
 */
export const calculateTotalCartPrice = (cart) => {
  let totalPrice = 0;

  if (!cart || cart.length === 0) return totalPrice;

  cart.forEach((item) => {
    let itemPrice = calculateTotalItemPrice(item);
    totalPrice += itemPrice;
  });

  return totalPrice;
};

/**
 * Calculate the total price of the item (includes base price plus all modification prices i.e. toppings)
 * @param {Object} item
 * @returns {Number} itemPrice
 */
export const calculateTotalItemPrice = (item) => {
  let itemPrice = item.product.price;

  const modifications = Object.entries(item.modifications);
  modifications.forEach((group) => {
    const [, selected] = group;

    if (Array.isArray(selected)) {
      selected.forEach((option) => (itemPrice += option.price));
    } else {
      itemPrice += selected.price;
    }
  });
  return itemPrice;
};
