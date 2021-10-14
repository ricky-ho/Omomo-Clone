/**
 * Add or remove the given checkbox from the list of selected
 * checkboxes and return a new list of selected checkboxes
 * @param {Object[]} checkedOptions
 * @param {Object} target
 * @returns {Object[]} newCheckedOptions
 */
export const getAllSelectedCheckboxes = (checkedOptions, target) => {
  const isChecked = isCheckboxSelected(checkedOptions, target);

  if (isChecked) {
    return checkedOptions.filter((option) => option._id !== target._id);
  }

  return [...checkedOptions, target];
};

/**
 * Check if the given option is contained within the array, checkedOptions, by searching for its id
 * @param {Object[]} checkedOptions
 * @param {String} id
 * @returns Boolean
 */
export const isCheckboxSelected = (checkedOptions, target) => {
  return checkedOptions.find((opt) => opt._id === target._id) !== undefined
    ? true
    : false;
};

/**
 * Given the array of options and a target id, return the option
 * with the matching id
 * @param {Object[]} options
 * @param {String} id
 * @returns {Object} option
 */
export const getOptionByID = (options, id) => {
  return options.find((opt) => opt._id === id);
};
