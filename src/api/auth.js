import http from "../services/httpService";
import { unsplashAuthApi, unsplashApi } from "../config.json";

export const fetchAccessToken = async (
  client_Id,
  client_secret,
  redirect_uri,
  code,
  grant_type
) => {
  const { data, error } = await http.post(
    `${unsplashAuthApi}/token?client_id=${client_Id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&code=${code}&grant_type=${grant_type}`
  );
  if (error) {
    throw Error(error);
  }
  return data;
};

export const fetchUser = async (token) => {
  const { data, error } = await http.get(`${unsplashApi}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if(error){
    throw Error(error)
  }
  return data
};
