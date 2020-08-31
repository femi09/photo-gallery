import { LOAD_PHOTOS, LOAD_PHOTOS_SUCCESS } from "../constants";

const loadingReducer = (loading = true, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return true;
    case LOAD_PHOTOS_SUCCESS:
      return false
    default:
      return loading;
  }
};
export default loadingReducer;
