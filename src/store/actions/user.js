import {
    GET_USER,
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_LIKED_PHOTOS,
    GET_USER_LIKED_PHOTOS_FAILURE,
    GET_USER_LIKED_PHOTOS_SUCCESS,
    GET_USER_PHOTOS,
    GET_USER_PHOTOS_SUCCESS,
    GET_USER_PHOTOS_FAILURE,
    GET_USER_COLLECTION,
    GET_USER_COLLECTION_SUCCESS,
    GET_USER_COLLECTION_FAILURE,
    LOGOUT_USER
  } from "../constants";

export const getUser = (token) => ({
    type: GET_USER,
    token
  });
  
  export const setUser = (user) => ({
    type: GET_USER_SUCCESS,
    user,
  });
  
  export const setUserFailure = (error) => ({
    type: GET_USER_FAILURE,
    error
  });

  
  export const getUserPhotos = (username, token) => ({
    type: GET_USER_PHOTOS,
    username,
    token
  });
  
  export const setUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS_SUCCESS,
    photos
  });
  
  export const setUserPhotoFailure = (error) => ({
    type: GET_USER_PHOTOS_FAILURE,
    error
  });

  export const getLikedPhotos = (username, token) => ({
    type: GET_USER_LIKED_PHOTOS,
    username,
    token
  });
  
  export const setLikedPhotos = (photos) => ({
    type: GET_USER_LIKED_PHOTOS_SUCCESS,
    photos
  });
  
  export const setLikedPhotosFailure = (error) => ({
    type: GET_USER_LIKED_PHOTOS_FAILURE,
    error
  });

  export const getUserCollection = ( username, token) => ({
    type: GET_USER_COLLECTION,
    username,
    token,
    
  });
  
  export const setUserCollection = (collections) => ({
    type: GET_USER_COLLECTION_SUCCESS,
    collections
  });
  
  export const setUserCollectionFailure = (error) => ({
    type: GET_USER_COLLECTION_FAILURE,
    error
  });
  
  export const logout = () => ({
    type: LOGOUT_USER
  })