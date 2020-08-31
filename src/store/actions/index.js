import {
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
  PHOTOS_SEARCH,
  PHOTOS_SEARCH_SUCCESS,
  LOAD_MORE_PHOTOS,
} from "../constants";

export const loadPhotos = () => ({
  type: LOAD_PHOTOS,
});

export const searchPhoto = (searchTerm) => ({
  type: PHOTOS_SEARCH,
  searchTerm,
});

export const setPhotos = (photos) => ({
  type: LOAD_PHOTOS_SUCCESS,
  photos,
});

export const setSearchedPhotos = (photos) => ({
  type: PHOTOS_SEARCH_SUCCESS,
  photos,
});

export const loadMorePhotos = (photos) => ({
  type: LOAD_MORE_PHOTOS,
  photos,
});
export const setError = (error) => ({
  type: LOAD_PHOTOS_FAILURE,
  error,
});
