import {
  calculateTotalCartPrice,
  calculateTotalCartItems,
} from "../../utils/cartUtils";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_TOTAL_ITEMS,
  CLEAR_CART,
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
        cart: state.cart.filter((item, index) => index !== indexToRemove),
      };

    case EDIT_ITEM:
      const { cartIndex, item } = action.payload;
      const newCart = [...state.cart];
      newCart[cartIndex] = item;

      return {
        ...state,
        cart: newCart,
      };

    case CLEAR_CART:
      return {
        cart: [],
        totalPrice: 0,
        totalItems: 0,
      };

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
