import {
  PHOTOS_SEARCH,
  LOAD_PHOTOS_SUCCESS,
  PHOTOS_SEARCH_SUCCESS,
  LOAD_MORE_PHOTOS,
} from "../constants";

const pageReducer = (page = 1, action) => {
  switch (action.type) {
    case LOAD_PHOTOS_SUCCESS:
      return page;
    case PHOTOS_SEARCH:
      return page;
    case PHOTOS_SEARCH_SUCCESS:
      return page;
      case LOAD_MORE_PHOTOS:
      return page + 1;
    default:
      return page;
  }
};

export default pageReducer;
