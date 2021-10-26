import QuantityGroup from "./QuantityGroup";
import SelectionGroup from "./SelectionGroup";
import CheckboxGroup from "./CheckboxGroup";

import "./style.scss";

const ModalForm = ({ item }) => {
  return (
    <form className="modal__form">
      <QuantityGroup {...{ item }} />

      {item.product.modifications.map((group, index) => {
        if (group.limit === -1) {
          return <CheckboxGroup key={index} {...{ item, group }} />;
        }

        return <SelectionGroup key={index} {...{ item, group }} />;
      })}
    </form>
  );
};

export default ModalForm;
