import { useReducer, useEffect } from "react";

import checkboxReducer from "../../../reducers/checkbox-reducer";
import { isCheckboxOptionSelected } from "../../../utils/formUtils";

const CheckboxGroup = ({ group, addSelectedOptions }) => {
  const initialState = { checked: [] };

  const [state, dispatch] = useReducer(checkboxReducer, initialState);

  useEffect(
    () => addSelectedOptions(group.label, state.checked),
    [state.checked]
  );

  const Checkbox = ({ option }) => {
    const handleChange = () => {
      dispatch(option);
    };

    return (
      <div key={option._id} className="checkbox__option">
        <input
          type="checkbox"
          id={option._id}
          onChange={handleChange}
          checked={isCheckboxOptionSelected(state.checked, option._id)}
        />
        <div>
          <label htmlFor={option._id}>{option.label}</label>
          {option.price > 0 && <span>{`+${option.price.toFixed(2)}`}</span>}
        </div>
      </div>
    );
  };

  return (
    <fieldset name={group.label} className="checkbox__fieldset">
      <legend>{group.label}</legend>
      {group.options.map((option, index) => {
        return <Checkbox key={index} {...{ option }} />;
      })}
    </fieldset>
  );
};

export default CheckboxGroup;
