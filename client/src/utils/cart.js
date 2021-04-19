import { cloneDeep } from "lodash";

/**
 * Adds an item to the shopping cart
 * @param {Object[]} cart - The shopping cart
 * @param {Object} itemToAdd - The item we wish to add to cart
 * @param {Number} quantity - The quantity of the item to add
 * @returns A deep copy of the shopping cart with the item added
 */
export const addToCart = (cart, itemToAdd, quantity) => {
  const cartItems = cloneDeep(cart);
  const foundItems = cartItems.filter((item) => item._id === itemToAdd._id);

  if (foundItems.length > 0) {
    const index = findDuplicateItemIndex(foundItems, itemToAdd);
    if (index !== null) {
      foundItems[index].quantity += quantity;
      return cartItems;
    }
  }
  cartItems.push({ ...itemToAdd, quantity: quantity });
  return cartItems;
};

/**
 * Removes an item from the shopping cart
 * @param {Object[]} cart - The shopping cart
 * @param {Number} index - The index of the cart item we wish to remove
 * @returns {Object[]} A deep copy of the shopping cart with the item removed
 */
export const removeFromCart = (cart, index) => {
  const cartItems = cloneDeep(cart);
  cartItems.splice(index, 1);
  return cartItems;
};

/**
 * Calculate the total price of the shopping cart
 * @param {Object[]} cart - The shopping cart
 * @returns {Number} The total price of the cart
 */
export const calculateTotalCartPrice = (cart) => {
  return cart.reduce(
    (subtotal, item) => subtotal + item.totalPrice * item.quantity,
    0
  );
};

/**
 * Calculate the total number of items in the shopping cart
 * @param {Object[]} cart - The shopping cart
 * @returns {Number} The total number of items
 */
export const calculateTotalCartItems = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

/**
 * @param {Object[]} foundItems - The items in cart with the same product id as itemToAdd
 * @param {Object} itemToAdd - The item we want to add to cart
 * @returns {?Number} The index of the duplicate object in foundItems or null
 */
const findDuplicateItemIndex = (foundItems, itemToAdd) => {
  const NUM_OPTION_GROUPS = 4;

  itemLoop: for (
    let itemIndex = 0;
    itemIndex < foundItems.length;
    itemIndex++
  ) {
    for (let groupIndex = 0; groupIndex < NUM_OPTION_GROUPS; groupIndex++) {
      const found_groupOptions = foundItems[itemIndex].options[groupIndex];
      const item_groupOptions = itemToAdd.options[groupIndex];
      if (found_groupOptions.length !== item_groupOptions.length) {
        continue itemLoop;
      }
      for (let i = 0; i < found_groupOptions.length; i++) {
        if (found_groupOptions[i].label !== item_groupOptions[i].label)
          continue itemLoop;
      }
    }
    return itemIndex;
  }
  return null;
};
