import React, { Component } from "react";
import axios from "axios";
import http from "../services/httpService";
import ImageCard from "./imageCard";
import ImageSearch from "./imageSearch";
import NotFound from "./notFound";
import { unsplashApi, client_Id } from "../config.json";
import ImageTags from "./imageTags";

class Images extends Component {
  state = {
    photos: [],
    searchTerm: "",
    isLoading: true,
    photoTags: [
      "COVID-19",
      "Technology",
      "Business and Work",
      "Nature",
      "Wallpaper",
      "Food and Drink",
      "Architecture",
      "Travel",
      "Animals",
      "Spirituality",
      "Film",
      "Health and Wellness",
      "Fashion",
    ],
  };

  async componentDidMount() {
    const { data } = await http.get(
      `${unsplashApi}?page=7&per_page=30&query=random&client_id=${client_Id}`
    );
    const photos = data.results;
    const isLoading = false;
    this.setState({ photos, isLoading });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const {
      data,
    } = await http.get(
      `${unsplashApi}?page=5&per_page=30&query=${searchTerm}`,
      { headers: { Authorization: `Client-ID ${client_Id}` } }
    );
    const photos = data.results;

    this.setState({ photos });
  };

  handleChange = ({ currentTarget: input }) => {
    let searchTerm = this.state.searchTerm;
    searchTerm = input.value;
    this.setState({ searchTerm });
  };

  handleTagClick= async (e) => {
    const Tagname= e.target.innerText
    const {data} = await http.get(
      `${unsplashApi}?page=5&per_page=30&query=${Tagname}`,
      { headers: { Authorization: `Client-ID ${client_Id}` } }
    );
    const photos = data.results;

    this.setState({ photos });


  }

  render() {
    const { photos, isLoading, photoTags } = this.state;
    return (
      <React.Fragment>
        <ImageTags photoTags={photoTags} onClick={this.handleTagClick}/>
        <div className="container mx-auto">
          <ImageSearch
            value={this.state.searchTerm}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          {!isLoading && photos.length === 0 && <NotFound photos={photos} />}
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo) => (
              <ImageCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Images;
