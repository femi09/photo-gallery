import {
  GET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_USER,
  GET_USER,
} from "../constants";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
    case GET_USER:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
      };
    case GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        access_token: action.token,
        isAuthenticated: true,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        error: null,
        isLoading: false,
      };

    case GET_ACCESS_TOKEN_FAILURE:
    case GET_USER_FAILURE:
      localStorage.removeItem("access_token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.error,
        isLoading: false
      };

    case LOGOUT_USER:
      localStorage.removeItem("access_token");
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
