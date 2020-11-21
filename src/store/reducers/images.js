import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
  PHOTOS_SEARCH,
  PHOTOS_SEARCH_SUCCESS,
  PHOTOS_SEARCH_FAILURE,
  LOAD_MORE_PHOTOS,
  LOAD_MORE_PHOTOS_SUCCESS,
  LOAD_MORE_PHOTOS_FAILURE,
  LOAD_CLICKED_PHOTOTAGS,
  LOAD_CLICKED_PHOTOTAGS_SUCCESS,
  LOAD_CLICKED_PHOTOTAGS_FAILURE,
  LIKE_PHOTO,
  UNLIKE_PHOTO,
  LIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_FAILURE,
  UNLIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_FAILURE,
  DOWNLOAD_PHOTO,
  DOWNLOAD_PHOTO_FAILURE,
  DOWNLOAD_PHOTO_SUCCESS,
  GET_USER_PHOTOS,
  GET_USER_LIKED_PHOTOS,
  GET_USER_LIKED_PHOTOS_SUCCESS,
  GET_USER_LIKED_PHOTOS_FAILURE,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_FAILURE,
  GET_USER_COLLECTION,
  GET_USER_COLLECTION_SUCCESS,
  GET_USER_COLLECTION_FAILURE,
} from "../constants";

const initialState = {
  photos: [],
  collections: [],
  error: null,
  searchTerm: "",
  isLoading: false,
  clicked: false,
  page: Math.floor(Math.random() * 10 + 1),
  tagname: "",
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIKED_PHOTOS:
    case GET_USER_PHOTOS:
    case GET_USER_COLLECTION:
    case LOAD_PHOTOS:
      return { ...state, isLoading: true, photos: [] };
    case LOAD_PHOTOS_SUCCESS:
    case GET_USER_PHOTOS_SUCCESS:
    case GET_USER_LIKED_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        error: null,
        isLoading: false,
        searchTerm: "",
        tagname: "",
      };
    case GET_USER_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.collections,
        searchTerm: "",
        tagname: "",
      };
    case GET_USER_COLLECTION_FAILURE:
    case GET_USER_PHOTOS_FAILURE:
    case GET_USER_LIKED_PHOTOS_FAILURE:
    case LOAD_PHOTOS_FAILURE:
    case LOAD_MORE_PHOTOS_FAILURE:
    case LOAD_CLICKED_PHOTOTAGS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    case PHOTOS_SEARCH:
      return {
        ...state,
        isLoading: true,
        searchTerm: action.searchTerm,
        clicked: true,
      };
    case PHOTOS_SEARCH_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        error: null,
        isLoading: false,
      };
    case PHOTOS_SEARCH_FAILURE:
      return { ...state, error: action.error, isLoading: false, clicked: true };
    case LOAD_MORE_PHOTOS:
      return { ...state, isLoading: true, page: state.page + 1 };
    case LOAD_MORE_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.photos],
        isLoading: false,
        error: null,
      };
    case LOAD_CLICKED_PHOTOTAGS:
      return { ...state, isLoading: true, photos: [], tagname: action.tagname };
    case LOAD_CLICKED_PHOTOTAGS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        error: null,
        isLoading: false,
        searchTerm: "",
      };
    case LIKE_PHOTO:
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.photo_id
            ? { ...photo, liked_by_user: true, likes: photo.likes + 1 }
            : photo
        ),
      };
    case UNLIKE_PHOTO:
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.photo_id
            ? { ...photo, liked_by_user: false, likes: photo.likes - 1 }
            : photo
        ),
      };
    case LIKE_PHOTO_SUCCESS:
    case UNLIKE_PHOTO_SUCCESS:
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.photo.id
            ? {
                ...photo,
                likes: action.photo.likes,
                liked_by_user: action.photo.liked_by_user,
              }
            : photo
        ),
        isLoading: false,
      };
    case DOWNLOAD_PHOTO:
      return { ...state, isLoading: true };
    case DOWNLOAD_PHOTO_SUCCESS:
      return { ...state, isLoading: false, photo_url: action.url };
    case LIKE_PHOTO_FAILURE:
    case UNLIKE_PHOTO_FAILURE:
    case DOWNLOAD_PHOTO_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default imagesReducer;
