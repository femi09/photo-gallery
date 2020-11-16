import {
  GET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_USER
} from "../constants";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  refresh_token: localStorage.getItem("refresh_token"),
  isAuthenticated: false,
  isLoading: true,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
      return { ...state, isAuthenticated: false, isLoading: true, user: null };
    case GET_ACCESS_TOKEN_SUCCESS:
    case GET_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      };
    case GET_ACCESS_TOKEN_FAILURE:
      case GET_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        access_token: null,
        refresh_token: null,
        error: action.error
      };
      case LOGOUT_USER:
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        return { ...state, access_token: null, refresh_token: null, isAuthenticated: false, user:null}
    default:
      return state;
  }
};

export default authReducer;
