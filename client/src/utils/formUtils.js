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

/**
 * Format a string into the phone number format e.g. (123) 456-7890
 * @param {String} value
 * @returns {String} formattedPhoneNumber
 */
export const formatPhoneNumber = (value) => {
  if (!value) return value;

  /* Remove all non-digit characters from the string */
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) {
    return phoneNumber;
  }

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

/**
 * Validate name input to ensure it is not empty. Return true if valid, false otherwise
 * @param {String} value
 * @returns {Boolean}
 */
export const validNameInput = (value) => {
  if (value === "") {
    return false;
  }

  return true;
};

/**
 * Validate the phone input to ensure it is in the intended format supplied in the regex. Return true if valid, false otherwise
 * @param {String} value
 * @returns {Boolean}
 */
export const validPhoneInput = (value) => {
  const regex = /^\(([0-9]{3})\)[ ]?([0-9]{3})[-]?([0-9]{4})$/;

  if (value === "" || !regex.test(value)) {
    return false;
  }

  return true;
};

/**
 * Validate the email input to ensure it is in the intended format supplied in the regex. Return true if valid, false otherwise
 * @param {String} value
 * @returns {Boolean}
 */
export const validEmailInput = (value) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (value === "" || !regex.test(value)) {
    return false;
  }

  return true;
};
