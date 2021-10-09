const checkboxReducer = (state, action) => {
  if (state.checkedIDs.includes(action.id)) {
    console.log(`Filtering out option ${action.id}`);
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
