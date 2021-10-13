import {
  INITIALIZE_OPTIONS,
  SET_DEFAULT_SELECTED_OPTIONS,
  SET_OPTION_GROUP,
  SET_QUANTITY,
} from "../actions/item-actions";

const itemReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };

    case SET_DEFAULT_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: action.payload,
      };

    case SET_OPTION_GROUP:
      const { group, newOption } = action.payload;

      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [group]: newOption,
        },
      };

    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };

    default:
      return state;
  }
};

export default itemReducer;
