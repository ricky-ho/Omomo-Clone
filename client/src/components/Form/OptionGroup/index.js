import { useCallback } from "react";

import SelectionGroup from "./select";
import CheckboxGroup from "./checkbox";
import { SET_OPTIONS } from "../../../contexts/actions/form-actions";

import "./style.scss";

const OptionGroup = ({ group, dispatch }) => {
  const addSelectedOptions = useCallback(
    (group, newOption) => {
      dispatch({
        type: SET_OPTIONS,
        payload: { group, newOption },
      });
    },
    [dispatch]
  );

  if (group.limit === -1) {
    return <CheckboxGroup {...{ group, addSelectedOptions }} />;
  }

  return <SelectionGroup {...{ group, addSelectedOptions }} />;
};

export default OptionGroup;
