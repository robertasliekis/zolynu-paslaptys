const initialState = {
  pageNumber: 0,
};

const changePageNumber = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_NUMBER":
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export default changePageNumber;
