export const calculateItemPrice = (item, options) => {
  const itemPrice = item.price;
  const optionsTotalPrice = options.reduce(
    (groupTotal, optionGroup) =>
      groupTotal +
      optionGroup.opts.reduce(
        (subtotal, option) => subtotal + (option.selected && option.price),
        0
      ),
    0
  );
  return itemPrice + optionsTotalPrice;
};

export const appendOptionsAndQuantity = (item, options, totalPrice) => {
  item.options = getSelectedOptions(options);
  item.totalPrice = totalPrice;
};

const getSelectedOptions = (options) =>
  options.map((group) => group.opts.filter((opt) => opt.selected));
