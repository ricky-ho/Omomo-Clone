import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_OPTIONS,
} from "../actions/form-actions";

const formReducer = (state, action) => {
  switch (action.type) {
    case SET_OPTIONS:
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

export default formReducer;
