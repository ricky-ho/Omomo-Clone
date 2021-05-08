/**
 * An array of option objects that will be appended to each product item
 * @property {String} name - The name of the option group
 * @property {?Number} limit - The maximum number of options that can be selected or null (unlimited)
 * @property {String} label - A label for the option group to display to users
 * @property {Object[]} opts - The option choices that a user can select
 * @property {Object} opts[] - The option choice
 * @property {String} opts[].label - The option choice label to display to users
 * @property {Number} opts[].price - The price of the option choice
 * @property {Boolean} opts[].selected - Represents whether the option is selected or not
 */
const default_options = [
  {
    name: "ice",
    limit: 1,
    label: "Ice level / Hot",
    opts: [
      { label: "Regular ice", price: 0, selected: true },
      { label: "Less ice", price: 0, selected: false },
      { label: "No ice", price: 0, selected: false },
      { label: "Extra ice", price: 0, selected: false },
      { label: "Hot", price: 0, selected: false },
    ],
  },
  {
    name: "sweetness",
    limit: 1,
    label: "Sugar level",
    opts: [
      { label: "100%", price: 0, selected: true },
      { label: "80%", price: 0, selected: false },
      { label: "50%", price: 0, selected: false },
      { label: "30%", price: 0, selected: false },
      { label: "0%", price: 0, selected: false },
      { label: "Extra sweet", price: 0, selected: false },
    ],
  },
  {
    name: "dairy",
    limit: 1,
    label: "Dairy alternatives",
    opts: [
      { label: "House milk", price: 0, selected: true },
      { label: "Fresh milk", price: 0, selected: false },
      { label: "Almond milk", price: 0.5, selected: false },
      { label: "Oat milk", price: 0.5, selected: false },
    ],
  },
  {
    name: "toppings",
    limit: null,
    label: "Toppings",
    opts: [
      { label: "Honey boba", price: 0.5, selected: false },
      { label: "Agar boba", price: 0.5, selected: false },
      { label: "Aloe Vera", price: 0.5, selected: false },
      { label: "Red bean", price: 0.5, selected: false },
      { label: "Lychee jelly", price: 0.5, selected: false },
      { label: "Coffee jelly", price: 0.75, selected: false },
    ],
  },
];

export default default_options;
