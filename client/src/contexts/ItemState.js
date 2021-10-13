import { createContext, useState, useEffect, useReducer } from "react";

import itemReducer from "./reducers/item-reducer";
import { getOptions } from "../utils/menuUtils";
import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  INITIALIZE_OPTIONS,
  SET_DEFAULT_SELECTED_OPTIONS,
  SET_OPTION_GROUP,
} from "./actions/item-actions";

export const ItemContext = createContext();

export const ItemState = ({ children }) => {
  const initialState = {
    selectedOptions: null,
    options: null,
    quantity: 1,
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  /* Fetch item options from server */
  useEffect(() => {
    const getItemOptions = async () => {
      const options = await getOptions();
      initializeOptionsState(options);
    };

    getItemOptions();
  }, []);

  /* Set the default selected options */
  useEffect(() => {
    const getDefaultOptions = function (options) {
      const defaultOptions = {
        [options[0].label]: options[0].options[0],
        [options[1].label]: options[1].options[0],
        [options[2].label]: options[2].options[0],
        [options[3].label]: [],
      };
      setDefaultOptions(defaultOptions);
    };

    if (state.options) {
      getDefaultOptions(state.options);
    }
  }, [state.options]);

  const initializeOptionsState = (options) => {
    dispatch({
      type: INITIALIZE_OPTIONS,
      payload: options,
    });
  };

  const setDefaultOptions = (defaultOptions) => {
    dispatch({
      type: SET_DEFAULT_SELECTED_OPTIONS,
      payload: defaultOptions,
    });
  };

  const setSelectedOptions = (group, newOption) => {
    dispatch({
      type: SET_OPTION_GROUP,
      payload: { group, newOption },
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: INCREMENT_QUANTITY,
    });
  };

  const decrementQuantity = () => {
    dispatch({
      type: DECREMENT_QUANTITY,
    });
  };

  return (
    <ItemContext.Provider
      value={{
        options: state.options,
        selectedOptions: state.selectedOptions,
        quantity: state.quantity,
        incrementQuantity,
        decrementQuantity,
        setSelectedOptions,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
