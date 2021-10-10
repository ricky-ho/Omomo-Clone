/**
 * Check if the given option is contained within the array, checkedOptions, by searching for its id
 * @param {Object[]} checkedOptions
 * @param {String} id
 * @returns Boolean
 */
export const isCheckboxOptionSelected = (checkedOptions, id) => {
  return checkedOptions.find((option) => option._id === id) !== undefined
    ? true
    : false;
};
