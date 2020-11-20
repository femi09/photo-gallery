import {
  GET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_USER,
  GET_USER,
  GET_PUBLIC_USER,
  GET_PUBLIC_USER_SUCCESS,
  GET_PUBLIC_USER_FAILURE,
} from "../constants";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  public_user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
    case GET_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PUBLIC_USER:
      return { ...state, isLoading: true };
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

    case GET_PUBLIC_USER_SUCCESS:
      return {
        ...state,
        public_user: action.user,
        isLoading: false,
        error: null,
      };

    case GET_PUBLIC_USER_FAILURE:
      return {
        ...state,
        public_user: null,
        isLoading: false,
        error: action.error,
      };

    case GET_ACCESS_TOKEN_FAILURE:
    case GET_USER_FAILURE:
      localStorage.removeItem("access_token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.error,
        isLoading: false,
      };

    case LOGOUT_USER:
      localStorage.removeItem("access_token");
      return {
        ...state,
        access_token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
