import { isCheckboxOptionSelected } from "../../utils/formUtils";

const checkboxReducer = (state, payload) => {
  const isChecked = isCheckboxOptionSelected(state.checked, payload._id);

  if (isChecked) {
    return {
      ...state,
      checked: state.checked.filter((option) => option._id !== payload._id),
    };
  }

  return {
    ...state,
    checked: [...state.checked, payload],
  };
};

export default checkboxReducer;
