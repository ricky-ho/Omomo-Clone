import {
  calculateTotalCartPrice,
  calculateTotalCartItems,
} from "../../utils/cartUtils";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  EDIT_ITEM_QUANTITY,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_TOTAL_ITEMS,
} from "../actions/cart-actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      return {
        ...state,
        cart: [...state.cart, newItem],
      };

    case REMOVE_ITEM:
      const indexToRemove = action.payload;
      return {
        ...state,
        cart: [...state.cart.filter((item, index) => index !== indexToRemove)],
      };

    case EDIT_ITEM:
      const { cartIndex, item } = action.payload;
      state.cart[cartIndex] = item;

      return { ...state };

    case EDIT_ITEM_QUANTITY:
      const { index, quantity } = action.payload;
      const itemToModify = state.cart[index];
      itemToModify.quantity = quantity;

      return { ...state };

    case CALCULATE_TOTAL_PRICE:
      let totalPrice = calculateTotalCartPrice(state.cart);
      return {
        ...state,
        totalPrice,
      };

    case CALCULATE_TOTAL_ITEMS:
      let totalItems = calculateTotalCartItems(state.cart);
      return {
        ...state,
        totalItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
