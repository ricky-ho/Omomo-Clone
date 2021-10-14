import { useState, useEffect, useContext } from "react";
import { ItemContext } from "../../../contexts/ItemState";
import { getOptionByID } from "../../../utils/formUtils";

const SelectionGroup = ({ item, group }) => {
  const { setSelectedOptions } = useContext(ItemContext);

  const [selected, setSelected] = useState(
    item?.modifications?.[group.label] || group.options[0]
  );

  useEffect(() => {
    setSelectedOptions(group.label, selected);
  }, [selected]);

  const handleChange = (e) => {
    const option = getOptionByID(group.options, e.target.value);
    setSelected(option);
  };

  return (
    <fieldset className="selection__fieldset">
      <label htmlFor={group.label}>{group.label}</label>
      <select
        name={group.label}
        id={group.label}
        onChange={handleChange}
        defaultValue={selected?._id || group.options[0]._id}
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
