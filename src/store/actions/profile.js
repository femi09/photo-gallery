import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../constants";

export const getProfile = (username, token) => ({
  type: GET_PROFILE,
  username,
  token,
});

export const setProfile = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  profile,
});

export const setProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  error,
});
