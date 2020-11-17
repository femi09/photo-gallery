import {
  GET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
  GET_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  LOGOUT_USER
} from "../constants";

export const getAccessToken = (
  client_Id,
  client_secret,
  redirect_uri,
  code,
  grant_type,
  history
) => ({
  type: GET_ACCESS_TOKEN,
  client_Id,
  client_secret,
  redirect_uri,
  code,
  grant_type,
  history
});

export const storeAccessToken = (token) => ({
  type: GET_ACCESS_TOKEN_SUCCESS,
  token,
});

export const setAccessTokenError = (error) => ({
  type: GET_ACCESS_TOKEN_FAILURE,
  error,
});

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
