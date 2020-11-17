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
  LIKE_PHOTO,
  UNLIKE_PHOTO,
  LIKE_PHOTO_SUCCESS,
  UNLIKE_PHOTO_SUCCESS,
  LIKE_PHOTO_FAILURE,
  UNLIKE_PHOTO_FAILURE,
  UPDATE_PHOTO
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

export const likePhoto = (photo_id, token) => ({
  type: LIKE_PHOTO,
  photo_id,
  token
})

export const setLike = (photo) => ({
  type: LIKE_PHOTO_SUCCESS,
  photo
})

export const setLikeError = (error) => ({
  type: LIKE_PHOTO_FAILURE,
  error
})

export const unLikePhoto = (photo_id, token) => ({
  type: UNLIKE_PHOTO,
  photo_id,
  token
})

export const updatePhoto = (photo_id) => ({
  type:UPDATE_PHOTO,
  photo_id
})

export const setUnlike = (photo) => ({
  type: UNLIKE_PHOTO_SUCCESS,
  photo
})

export const setUnlikeError = (error) => ({
  type: UNLIKE_PHOTO_FAILURE,
  error
})
