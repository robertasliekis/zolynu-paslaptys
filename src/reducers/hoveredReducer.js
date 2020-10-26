const initialState = {
  hovered: false,
};

const hovered = (state = initialState, action) => {
  switch (action.type) {
    case "HOVERED":
      return { ...state, hovered: action.payload };
    default:
      return state;
  }
};

export default hovered;
