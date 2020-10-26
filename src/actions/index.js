export const changePageNumber = (number) => {
  return {
    type: "CHANGE_PAGE_NUMBER",
    payload: number,
  };
};

export const mouseEnterCornerVideo = (ref) => {
  return {
    type: "MOUSE_ENTER_CORNER_VIDEO",
    payload: ref,
  };
};

export const hoveredChange = (bool) => {
  return {
    type: "HOVERED",
    payload: bool,
  };
};

export const playForrestSound = (bool) => {
  return {
    type: "PLAY_FORREST_SOUND",
    payload: bool,
  };
};
export const playMeadowSound = (bool) => {
  return {
    type: "PLAY_MEADOW_SOUND",
    payload: bool,
  };
};
export const playGardenSound = (bool) => {
  return {
    type: "PLAY_GARDEN_SOUND",
    payload: bool,
  };
};
