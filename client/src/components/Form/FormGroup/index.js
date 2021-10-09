import SelectionGroup from "../SelectionGroup";
import CheckboxGroup from "../CheckboxGroup";
import "./style.scss";

const FormGroup = ({ group, addSelectedOptions }) => {
  const { limit } = group;

  if (limit === -1) {
    return <CheckboxGroup {...{ group, addSelectedOptions }} />;
  }

  return <SelectionGroup {...{ group, addSelectedOptions }} />;
};

export default FormGroup;
