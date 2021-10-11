import { useState, useEffect } from "react";

const SelectionGroup = ({ group, addSelectedOptions }) => {
  const [selected, setSelected] = useState(group.options[0]);

  const handleChange = (e) => {
    const option = group.options.find((opt) => opt._id === e.target.value);
    setSelected(option);
  };

  useEffect(() => {
    addSelectedOptions(group.label, selected);
  }, [selected, addSelectedOptions, group]);

  return (
    <fieldset className="selection__fieldset">
      <label htmlFor={group.label}>{group.label}</label>
      <select
        name={group.label}
        id={group.label}
        defaultValue={selected}
        onChange={handleChange}
      >
        {group.options.map((opt, index) => {
          return (
            <option key={index} value={opt._id}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </fieldset>
  );
};

export default SelectionGroup;
