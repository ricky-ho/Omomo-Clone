import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "./cart-actions";

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
    default:
      return state;
  }
};

export default cartReducer;
