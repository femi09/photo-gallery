import { LOAD_PHOTOS_FAILURE } from "../constants";

const errorReducer = (error = null, action) => {
  switch (action.type) {
    case LOAD_PHOTOS_FAILURE:
      return action.error;
    default:
      return error;
  }
};

export default errorReducer;
