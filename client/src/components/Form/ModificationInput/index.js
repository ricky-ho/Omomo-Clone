import { useState } from "react";

import "./style.scss";

/*
  TODO: Handle options selection with limits in mind 
*/

const ModificationInput = ({ limit, group, addSelectedOptions }) => {
  if (limit === -1) {
    return <CheckboxInput {...{ group, addSelectedOptions }} />;
  }

  return <SelectionInput {...{ group, addSelectedOptions }} />;
};

const SelectionInput = ({ group, addSelectedOptions }) => {
  return (
    <fieldset name={group.label} className="checkbox__fieldset">
      <legend>{group.label}</legend>
      <select>
        {group.options.map((opt, index) => {
          return (
            <option key={index} value={opt.label}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

const CheckboxInput = ({ group, addSelectedOptions }) => {
  return (
    <fieldset name={group.label} className="checkbox__fieldset">
      <legend>{group.label}</legend>
      {group.options.map((opt) => {
        return (
          <div key={opt._id} className="checkbox__option">
            <input type="checkbox" id={opt._id} value={opt.label} />
            <div>
              <label htmlFor={opt._id}>{opt.label}</label>
              {opt.price > 0 ? <span>{`+${opt.price.toFixed(2)}`}</span> : null}
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};

export default ModificationInput;
