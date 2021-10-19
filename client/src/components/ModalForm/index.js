import { useContext } from "react";

import { ItemContext } from "../../contexts/ItemState";
import QuantityGroup from "./QuantityGroup";
import SelectionGroup from "./SelectionGroup";
import CheckboxGroup from "./CheckboxGroup";

import "./style.scss";

/*
  TODO: 
  - Add indicator that item has been added to cart
*/

const ModalForm = ({ item }) => {
  const { quantity, options } = useContext(ItemContext);

  return (
    <form className="modal__form">
      <QuantityGroup {...{ item, quantity }} />

      {options?.map((group, index) => {
        if (group.limit === -1) {
          return <CheckboxGroup key={index} {...{ item, group }} />;
        }

        return <SelectionGroup key={index} {...{ item, group }} />;
      })}
    </form>
  );
};

export default ModalForm;
