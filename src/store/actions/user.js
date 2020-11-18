import {
    GET_USER,
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
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
  
  export const logout = () => ({
    type: LOGOUT_USER
  })