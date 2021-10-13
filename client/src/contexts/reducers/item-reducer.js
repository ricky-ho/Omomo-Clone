import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_DEFAULT_SELECTED_OPTIONS,
  SET_OPTION_GROUP,
  INITIALIZE_OPTIONS,
} from "../actions/item-actions";

const itemReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_OPTIONS:
      console.log("initializing options state");
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

    case DECREMENT_QUANTITY:
      if (state.quantity > 1) {
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      }
      return state;

    case INCREMENT_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    default:
      return state;
  }
};

export default itemReducer;
