import { calculateTotalCartPrice } from "../utils/cartUtils";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  CALCULATE_TOTALS,
} from "./cart-actions";

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

    // case EDIT_ITEM:
    //   return {};

    case CALCULATE_TOTALS:
      let totalPrice = calculateTotalCartPrice(state.cart);
      return {
        ...state,
        totalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
