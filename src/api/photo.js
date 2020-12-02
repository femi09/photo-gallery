import spectrum from "../services/httpService";
import { unsplashApi, unsplashPhotosApi} from "../config.json";
import fileDownload from "js-file-download";

export const fetchAllPhotos = async (page, per_page) => {
  const { data, error } = await spectrum.get(
    `${unsplashApi}/photos?page=${page}&per_page=${per_page}&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
  );
  if (error) {
    throw new Error(error);
  }
  return data;
};

export const fetchSearchPhotos = async (searchTerm, page) => {
  const {
    data,
    error,
  } = await spectrum.get(
    `${unsplashPhotosApi}?page=${page}&per_page=30&query=${searchTerm}`,
    { headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}` } }
  );
  if (error) {
    throw new Error(error);
  }
  return data.results;
};

export const fetchMorePhotos = async (query, page) => {
  const {
    data,
    error,
  } = await spectrum.get(
    `${unsplashPhotosApi}?page=${page}&per_page=30&query=${query}`,
    { headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}` } }
  );
  if (error) {
    throw new Error(error);
  }
  return data.results;
};

export const fetchClickedTags = async (tagname, page) => {
  const { data, error } = await spectrum.get(
    `${unsplashPhotosApi}?page=${page}&per_page=30&query=${tagname}`,
    {
      headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}` },
    }
  );

  if (error) {
    throw new Error(error);
  }
  return data.results;
};

export const doLikePhoto = async (id, token) => {
  const { data, error } = await spectrum.post(
    `${unsplashApi}/photos/${id}/like`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (error) {
    throw Error(error);
  }
  return data;
};

export const doUnlikePhoto = async (id, token) => {
  const { data, error } = await spectrum.delete(
    `${unsplashApi}/photos/${id}/like`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (error) {
    throw Error(error);
  }
  return data;
};

export const photoUpdate = async (id, token) => {
  const { data, error } = await spectrum.put(
    `${unsplashApi}/photos/${id}/like`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (error) {
    throw Error(error);
  }
  return data;
};

export const doPhotoDownload = async (id) => {
  const { data, error } = await spectrum.get(
    `https://source.unsplash.com/${id}`,
    {
      headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}` },
      responseType: "blob",
    }
  );
  if (error) {
    throw new Error(error);
  }
  fileDownload(data, `photo-${id}.jpg`);
  return data
};

export const fetchUserPhotos = async (username, token) => {
  const { data, error } = await spectrum.get(
    `${unsplashApi}/users/${username}/photos`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (error) {
    throw new Error(error);
  }

  return data;
};

export const fetchLikedPhotos = async (username, token) => {
  const { data, error } = await spectrum.get(
    `${unsplashApi}/users/${username}/likes`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (error) {
    throw new Error(error);
  }
  return data;
};

export const fetchUserCollection = async (username, token) => {
  const { data, error } = await spectrum.get(
    `${unsplashApi}/users/${username}/collections`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (error) {
    throw new Error(error);
  }
  return data;
};
