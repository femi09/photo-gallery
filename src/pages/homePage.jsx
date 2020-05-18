import React, { Component } from "react";
import Images from "../components/images";
import ImageTags from "../components/imageTags";
import ImageSearch from "./../components/imageSearch";
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";

class HomePage extends Component {
  state = {
    photos: [],
    searchTerm: "",
    isLoading: true,
    photoTags: [
      "Covid-19",
      "Work From Home",
      "Technology",
      "Nature",
      "Wallpaper",
      "People",
      "Textures and Pattern",
      "Technology",
      "Animals",
      "Travel",
      "Interiors",
      "Business and Work",
      "Food and Drink",
      "Film",
      "Architecture",
      "Spirituality",
      "Health and Wellness",
      "Fashion",
      "Experimental",
      "Art and Culture",
      "Current Events",
    ],
  };

  // async componentDidMount() {
  //   const { data } = await http.get(
  //     `${unsplashApi}?page=7&per_page=30&query=random&client_id=${client_Id}`
  //   );
  //   const photos = data.results;
  //   const isLoading = false;
  //   this.setState({ photos, isLoading });
  // }

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

  handleTagClick = async (e) => {
    const Tagname = e.target.innerText;
    console.log(Tagname)
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=30&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const photos = data.results;
    this.setState({ photos });
  };

  render() {
    const { photos, isLoading, photoTags, searchTerm } = this.state;
    return (
      <div>
        <ImageTags photoTags={photoTags} onClick={this.handleTagClick} />
        <ImageSearch
          value={searchTerm}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <Images
          photos={photos}
          isLoading={isLoading}
          searchTerm={searchTerm}
        />
      </div>
    );
  }
}

export default HomePage;
