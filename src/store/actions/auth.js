import {
  GET_ACCESS_TOKEN,
  GET_ACCESS_TOKEN_SUCCESS,
  GET_ACCESS_TOKEN_FAILURE,
} from "../constants";

export const getAccessToken = (
  redirect_uri,
  code,
  grant_type,
  history
) => ({
  type: GET_ACCESS_TOKEN,
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

