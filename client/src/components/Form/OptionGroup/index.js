import SelectionGroup from "./select";
import CheckboxGroup from "./checkbox";
import { SET_OPTIONS } from "../../../reducers/form-actions";

import "./style.scss";

const OptionGroup = ({ group, dispatch }) => {
  const addSelectedOptions = (group, newOption) => {
    dispatch({
      type: SET_OPTIONS,
      payload: { group, newOption },
    });
  };

  if (group.limit === -1) {
    return <CheckboxGroup {...{ group, addSelectedOptions }} />;
  }

  return <SelectionGroup {...{ group, addSelectedOptions }} />;
};

export default OptionGroup;
