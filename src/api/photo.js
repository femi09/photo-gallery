import spectrum from '../services/httpService'
import { unsplashApi, unsplashPhotosApi, client_Id } from "../config.json";



export const fetchAllPhotos = async (page, per_page) => {
    const {data, error }= await spectrum.get(
        `${unsplashApi}/photos?page=${page}&per_page=${per_page}&client_id=${client_Id}`
      );
      if (error) {
          throw new Error(error)
      }
      return data
}

export const fetchSearchPhotos = async(searchTerm, page) => {
    const response = await spectrum.get(
        `${unsplashPhotosApi}?page=${page}&per_page=5&query=${searchTerm}`,
        { headers: { Authorization: `Client-ID ${client_Id}` } })
        if(response.status >= 400) {
            throw new Error(response.error)
        }
        return response.data.results
}

export const fetchMorePhotos = async(query, page) => {
    const response = await spectrum.get(
        `${unsplashPhotosApi}?page=${page}&per_page=5&query=${query}`,
        { headers: { Authorization: `Client-ID ${client_Id}` } })
        if(response.status >= 400) {
            throw new Error(response.error)
        }
        return response.data.results
}

export const fetchClickedTags = async(tagname, page) => {
    const response = await  spectrum.get(
        `${unsplashPhotosApi}?page=${page}&per_page=5&query=${tagname}`,
        {
          headers: { Authorization: `Client-ID ${client_Id}` },
        }
      );

      if(response.status >= 400) {
        throw new Error(response.error)
    }
    return response.data.results
  
}

export const doLikePhoto = async (id, token) => {
    const { data, error } = await spectrum.post(`${unsplashApi}/photos/${id}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if(error){
        throw Error(error)
      }
      return data
}

export const doUnlikePhoto = async (id, token) => {
    const { data, error } = await spectrum.delete(`${unsplashApi}/photos/${id}/like`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if(error){
        throw Error(error)
      }
      return data
}

export const photoUpdate = async (id, token) => {
  const { data, error } = await spectrum.put(`${unsplashApi}/photos/${id}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if(error){
      throw Error(error)
    }
    return data
}

export const doPhotoDownload = async(id) => {
  const {data, error} = await spectrum.get(
      `${unsplashApi}/photos/${id}/download`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    if(error) {
      throw new Error(error)
  }
  return data 
}
