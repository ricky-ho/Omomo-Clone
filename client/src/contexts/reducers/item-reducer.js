import { calculateTotalItemPrice } from "../../utils/cartUtils";
import {
  SET_OPTION_GROUP,
  SET_QUANTITY,
  CALCULATE_ITEM_SUBTOTAL,
} from "../actions/item-actions";

const itemReducer = (state, action) => {
  switch (action.type) {
    case SET_OPTION_GROUP:
      const { groupLabel, newOptions } = action.payload;

      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [groupLabel]: newOptions,
        },
      };

    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };

    case CALCULATE_ITEM_SUBTOTAL:
      const item = action.payload;
      return {
        ...state,
        subtotal: calculateTotalItemPrice(
          item,
          state.quantity,
          state.selectedOptions
        ),
      };

    default:
      return state;
  }
};

export default itemReducer;
