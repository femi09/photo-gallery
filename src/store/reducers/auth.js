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
  user: JSON.parse(localStorage.getItem("current_user")),
  isLoading: false,
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
        error: null,
        isLoading: false,
        isAuthenticated: true,
      };


    case GET_USER_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.error,
      };

    case GET_ACCESS_TOKEN_FAILURE:
      localStorage.removeItem("access_token");
      return {
        ...state,
        user: null,
        error: action.error,
        isLoading: false,
      };

    case LOGOUT_USER:
      localStorage.clear();
      window.location.replace("/")
      return {
        ...state,
        access_token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
