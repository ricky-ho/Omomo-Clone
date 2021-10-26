import { createContext, useReducer } from "react";

import itemReducer from "./reducers/item-reducer";
import {
  SET_OPTION_GROUP,
  SET_QUANTITY,
  CALCULATE_ITEM_SUBTOTAL,
} from "./actions/item-actions";

export const ItemContext = createContext();

export const ItemState = ({ children }) => {
  const initialState = {
    selectedOptions: null,
    quantity: 1,
    subtotal: 0,
  };
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const setSelectedOptions = (groupLabel, newOptions) => {
    dispatch({
      type: SET_OPTION_GROUP,
      payload: { groupLabel, newOptions },
    });
  };

  const setItemQuantity = (quantity) => {
    dispatch({
      type: SET_QUANTITY,
      payload: quantity,
    });
  };

  const calculateItemSubtotal = (item) => {
    dispatch({
      type: CALCULATE_ITEM_SUBTOTAL,
      payload: item,
    });
  };

  return (
    <ItemContext.Provider
      value={{
        selectedOptions: state.selectedOptions,
        quantity: state.quantity,
        subtotal: state.subtotal,
        setItemQuantity,
        setSelectedOptions,
        calculateItemSubtotal,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
