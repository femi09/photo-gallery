import http from '../services/httpService'
import { unsplashPhotosApi, client_Id } from "../config.json";


export const fetchRandomPhotos = async (page, per_page) => {
    const response = await http.get(
        `${unsplashPhotosApi}?page=${page}&per_page=${per_page}&query=editorial&client_id=${client_Id}`
      );
      if (response.status >= 400) {
          throw new Error(response.error)
      }
      return response.data.results
}

export const fetchSearchPhotos = async(searchTerm, page) => {
    const response = await http.get(
        `${unsplashPhotosApi}?page=${page}&per_page=5&query=${searchTerm}`,
        { headers: { Authorization: `Client-ID ${client_Id}` } })
        if(response.status >= 400) {
            throw new Error(response.error)
        }
        return response.data.results
}

export const fetchMorePhotos = async(query, page) => {
    const response = await http.get(
        `${unsplashPhotosApi}?page=${page}&per_page=5&query=${query}`,
        { headers: { Authorization: `Client-ID ${client_Id}` } })
        if(response.status >= 400) {
            throw new Error(response.error)
        }
        return response.data.results
}

export const fetchClickedTags = async(tagname) => {
    const response = await  http.get(
        `${unsplashPhotosApi}?page=5&per_page=5&query=${tagname}`,
        {
          headers: { Authorization: `Client-ID ${client_Id}` },
        }
      );

      if(response.status >= 400) {
        throw new Error(response.error)
    }
    return response.data.results
  
}