
import {
    LIKE_PHOTO,
    UNLIKE_PHOTO,
    LIKE_PHOTO_SUCCESS,
    UNLIKE_PHOTO_SUCCESS,
    LIKE_PHOTO_FAILURE,
    UNLIKE_PHOTO_FAILURE,
    UPDATE_PHOTO,
    DOWNLOAD_PHOTO,
    DOWNLOAD_PHOTO_FAILURE,
    DOWNLOAD_PHOTO_SUCCESS
  } from "../constants";

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
  
  export const downloadPhoto = (photo_id) => ({
    type: DOWNLOAD_PHOTO,
    photo_id,
  })
  
  export const downloadSuccess = (url) => ({
    type: DOWNLOAD_PHOTO_SUCCESS,
    url
  })
  
  export const downloadError = (error) => ({
    type: DOWNLOAD_PHOTO_FAILURE,
    error
  })