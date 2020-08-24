import React, { Component } from "react";
import Images from "../components/images";
import ImageTags from "../components/imageTags";
import ImageSearch from "./../components/imageSearch";
import NotFound from "./../components/notFound";
import Login from "./login";
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";

class HomePage extends Component {
  state = {
    photos: [],
    searchTerm: "",
    clicked: false,
    isLoading: true,
    nextPage: 1,
    per_page: 10,
    photoTags: [
      "Covid-19",
      "Work From Home",
      "Technology",
      "Nature",
      "Wallpaper",
      "People",
      "Textures and Pattern",
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

  async componentDidMount() {
    const { nextPage: page, per_page } = this.state;
    const { data } = await http.get(
      `${unsplashApi}?page=${page}&per_page=${per_page}&query=random&client_id=${client_Id}`
    );
    const photos = data.results;
    const isLoading = false;
    this.setState({ photos, isLoading });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchTerm, per_page } = this.state;
    const {
      data,
    } = await http.get(
      `${unsplashApi}?page=5&per_page=${per_page}&query=${searchTerm}`,
      { headers: { Authorization: `Client-ID ${client_Id}` } }
    );
    const photos = data.results;
    this.setState({ photos, isLoading: false, clicked: true });
  };

  handleChange = ({ currentTarget: input }) => {
    let searchTerm = this.state.searchTerm;
    searchTerm = input.value;
    this.setState({ searchTerm, clicked: false });
  };

  handleTagClick = async (e) => {
    const Tagname = e.target.innerText;
    const {per_page} = this.state;
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=${per_page}&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const photos = data.results;
    this.setState({ photos, isLoading: false });
  };

  handleLoadMore = async () => {
    const { nextPage, searchTerm, per_page } = this.state;
    const page = nextPage + 1;
    const query = searchTerm === "" ? "random" : searchTerm;
    const { data } = await http.get(
      `${unsplashApi}?page=${page}&per_page=${per_page}&query=${query}&client_id=${client_Id}`
    );

    const { photos } = this.state;
    const morePhotos = [...photos, ...data.results];
    this.setState({ photos: morePhotos, nextPage: page });
  };

  render() {
    const { photos, isLoading, photoTags, searchTerm, clicked } = this.state;
    const { state: location } = this.props.location;
    return (
      <div className="h-screen">
        <ImageTags
          photoTags={photoTags}
          onClick={this.handleTagClick}
          location={location}
        />
       <div className="flex-1 overflow-y-auto">
       <ImageSearch
          value={searchTerm}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {/* <Login /> */}
        {!isLoading && photos.length === 0 &&  searchTerm !== "" && clicked && <NotFound photos={photos} searchTerm={searchTerm} />}
        {clicked && searchTerm !== "" && photos.length !== 0 && (
          <h4 className="text-3xl text-center text-teal-500 mx-auto my-8">
            Showing results for {searchTerm}
          </h4>
        )}
        <Images
          photos={photos}
          isLoading={isLoading}
          searchTerm={searchTerm}
          onClick={this.handleLoadMore}
        />
       </div>
      </div>
    );
  }
}

export default HomePage;
