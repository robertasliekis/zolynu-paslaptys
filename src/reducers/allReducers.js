import { combineReducers } from "redux";
import changePageNumber from "./changePageNumberReducer";
import hovered from "./hoveredReducer";

export default combineReducers({
  changePageNumber: changePageNumber,
  hovered: hovered,
});
