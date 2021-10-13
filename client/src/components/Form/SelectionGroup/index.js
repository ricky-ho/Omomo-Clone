import { useState, useEffect, useContext } from "react";
import { ItemContext } from "../../../contexts/ItemState";

const SelectionGroup = ({ group }) => {
  const { setSelectedOptions } = useContext(ItemContext);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const option = group.options[selectedIndex];

    setSelectedOptions(group.label, option);
  }, [selectedIndex]);

  const handleChange = (e) => {
    const selected = +e.target.value;
    setSelectedIndex(selected);
  };

  return (
    <fieldset className="selection__fieldset">
      <label htmlFor={group.label}>{group.label}</label>
      <select
        name={group.label}
        id={group.label}
        onChange={handleChange}
        defaultValue={0}
      >
        {group.options.map((opt, index) => {
          return (
            <option key={index} value={index}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default SelectionGroup;
