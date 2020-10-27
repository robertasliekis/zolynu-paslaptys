const initialState = {
  pageNumber: 0,
  pageChangeCount: 0
};

const changePageNumber = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_NUMBER":
      return { ...state, pageNumber: action.payload, pageChangeCount: state.pageChangeCount + 1 };
    default:
      return state;
  }
};

export default changePageNumber;
