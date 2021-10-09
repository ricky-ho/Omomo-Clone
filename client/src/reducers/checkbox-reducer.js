const checkboxReducer = (state, action) => {
  if (state.checkedIDs.includes(action.id)) {
    return {
      ...state,
      checkedIDs: state.checkedIDs.filter((id) => id !== action.id),
    };
  }

  return {
    ...state,
    checkedIDs: [...state.checkedIDs, action.id],
  };
};

export default checkboxReducer;
