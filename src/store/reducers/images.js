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
} from "../constants";

const initialState = {
  photos: [],
  error: null,
  searchTerm: "",
  isLoading: false,
  clicked: false,
  page: 1,
  tagname: ""
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return { ...state, isLoading: true };
    case LOAD_PHOTOS_SUCCESS:
      return { ...state, photos: action.photos, error: null, isLoading: false, searchTerm: "", tagname: "" };
    case LOAD_PHOTOS_FAILURE:
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
    case LOAD_MORE_PHOTOS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    case LOAD_CLICKED_PHOTOTAGS:
      return { ...state, isLoading: true, photos:[], tagname: action.tagname};
    case LOAD_CLICKED_PHOTOTAGS_SUCCESS:
      return { ...state, photos: action.photos, error: null, isLoading: false, searchTerm:""};
    case LOAD_CLICKED_PHOTOTAGS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default imagesReducer;
