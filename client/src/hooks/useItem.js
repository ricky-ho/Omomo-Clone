import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";

import default_options from "../models/itemOptions";
import { calculateItemPrice } from "../utils/options";

const useItemState = (item) => {
  const itemCover = {
    backgroundImage: `url(${item.imgModal})`,
  };

  const [itemPrice, setItemPrice] = useState(item.price);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [options, setOptions] = useState(default_options);

  useEffect(() => {
    const newPrice = calculateItemPrice(item, options);
    setItemPrice(newPrice);
  }, [options, itemQuantity, item]);

  const handleOptionsChange = (groupIndex, limit, selectedIndex) => {
    const newOptions = cloneDeep(options);
    const optionGroup = newOptions[groupIndex].opts;

    if (!limit) {
      let selected = optionGroup[selectedIndex].selected;
      optionGroup[selectedIndex].selected = !selected;
    } else {
      optionGroup.forEach((opt) => (opt.selected = false));
      optionGroup[selectedIndex].selected = true;
    }
    setOptions(newOptions);
  };

  return {
    itemCover,
    itemPrice,
    itemQuantity,
    options,
    setItemQuantity,
    handleOptionsChange,
  };
};

export default useItemState;
