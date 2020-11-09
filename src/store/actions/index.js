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
} from "../constants";

export const loadPhotos = () => ({
  type: LOAD_PHOTOS,
});

export const setPhotos = (photos) => ({
  type: LOAD_PHOTOS_SUCCESS,
  photos,
});

export const setError = (error) => ({
  type: LOAD_PHOTOS_FAILURE,
  error,
});

export const searchPhoto = (searchTerm) => ({
  type: PHOTOS_SEARCH,
  searchTerm,
});

export const setSearchedPhotos = (photos) => ({
  type: PHOTOS_SEARCH_SUCCESS,
  photos,
});

export const setSearchedError = (error) => ({
  type: PHOTOS_SEARCH_FAILURE,
  error
});

export const loadMorePhotos = () => ({
  type: LOAD_MORE_PHOTOS,
});

export const setLoadMorePhotos = (photos) => ({
  type: LOAD_MORE_PHOTOS_SUCCESS,
  photos
})

export const setLoadMoreError =(error)=> ({
type: LOAD_MORE_PHOTOS_FAILURE,
error
})

export const loadClickedPhotoTags = (tagname) => ({
  type: LOAD_CLICKED_PHOTOTAGS,
  tagname
})

export const setClickedPhotoTags = (photos)=> ({
  type: LOAD_CLICKED_PHOTOTAGS_SUCCESS,
  photos
})
export const setClickedError = (error)=> ({
  type: LOAD_CLICKED_PHOTOTAGS_SUCCESS,
  error
})