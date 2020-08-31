import { PHOTOS_SEARCH, PHOTOS_SEARCH_SUCCESS } from "../constants";

const clickedReducer = (clicked = false, action) => {
  switch (action.type) {
    case PHOTOS_SEARCH_SUCCESS:
      return true;
    default:
      return clicked;
  }
};
export default clickedReducer;
