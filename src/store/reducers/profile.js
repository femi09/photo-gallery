import {
  GET_USER_PHOTOS,
  GET_USER_LIKED_PHOTOS,
  GET_USER_LIKED_PHOTOS_SUCCESS,
  GET_USER_LIKED_PHOTOS_FAILURE,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_FAILURE,
  GET_USER_COLLECTION,
  GET_USER_COLLECTION_SUCCESS,
  GET_USER_COLLECTION_FAILURE,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../constants";

const initialState = {
  profile: null,
  user_photos: [],
  collections: [],
  isLoading: true,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case GET_USER_LIKED_PHOTOS:
    case GET_USER_PHOTOS:
      return { ...state, isLoading: true };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        isLoading: false,
        error: null,
      };

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: null,
        isLoading: false,
        error: action.error,
      };

    case GET_USER_PHOTOS_SUCCESS:
    case GET_USER_LIKED_PHOTOS_SUCCESS:
      return { ...state, isLoading: false, user_photos: action.photos };

    case GET_USER_PHOTOS_FAILURE:
    case GET_USER_LIKED_PHOTOS_FAILURE:
      return { ...state, isLoading: false, error: action.error };

    case GET_USER_COLLECTION:
      return { ...state, collections: [], isLoading: true };

    case GET_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.collections,
      };

    case GET_USER_COLLECTION_FAILURE:
      return {
        ...state,
        collections: [],
        error: action.error,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default profileReducer;
