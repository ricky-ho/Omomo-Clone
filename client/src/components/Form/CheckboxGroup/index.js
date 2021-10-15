import { useState, useEffect, useContext } from "react";

import { ItemContext } from "../../../contexts/ItemState";
import {
  getAllSelectedCheckboxes,
  isCheckboxSelected,
} from "../../../utils/formUtils";

import "./style.scss";

const CheckboxGroup = ({ item, group }) => {
  const { setSelectedOptions } = useContext(ItemContext);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    item?.modifications?.[group.label] || []
  );

  useEffect(() => {
    setSelectedOptions(group.label, selectedCheckboxes);
  }, [selectedCheckboxes]);

  const Checkbox = ({ index, option }) => {
    const handleChange = () => {
      const selected = getAllSelectedCheckboxes(selectedCheckboxes, option);
      setSelectedCheckboxes(selected);
    };

    return (
      <div key={index} className="checkbox__option">
        <input
          type="checkbox"
          id={option._id}
          onChange={handleChange}
          checked={isCheckboxSelected(selectedCheckboxes, option)}
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
        return <Checkbox key={index} {...{ index, option }} />;
      })}
    </fieldset>
  );
};

export default CheckboxGroup;
