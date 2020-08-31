import React, { Component } from "react";
import ImageTags from "./../components/imageTags";
import Images from "./../components/images";
import Login from './login';
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";


class TagDetails extends Component {
  state = {
    photos: [],
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

  //fetching images on tag page mount
  async componentDidMount() {
    const Tagname = this.props.location.state.photoTag;
    const {nextPage: page, per_page} = this.state

    const { data } = await http.get(
      `${unsplashApi}?page=${page}&per_page=${per_page}&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );
    const photos = data.results;
    this.setState({ photos, isLoading:false });
  }

  //To fetch images when you click a tag from another tag's page
  handleTagClick = async (e) => {
    const {per_page} = this.state;
    const Tagname = e.target.innerText;
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=${per_page}&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const photos = data.results;
    this.setState({ photos, isLoading:false });
  };

  handleLoadMore = async () => {
    const Tagname = this.props.location.state.photoTag;
    const { nextPage, per_page } = this.state;
    const page = nextPage + 1;
    const { data } = await http.get(
      `${unsplashApi}?page=${page}&per_page=${per_page}&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const { photos } = this.state;
    const morePhotos = [...photos, ...data.results];

    this.setState({ photos: morePhotos, nextPage: page });
  };

  render() {
    const { photos, photoTags } = this.state;
    const { state: location } = this.props.location;
    return (
      <div>
        <ImageTags
          photoTags={photoTags}
          onClick={this.handleTagClick}
          location={location}
        />
        {/* <Login/> */}
        <h4 className="text-3xl text-center text-teal-500 mx-auto mt-8">Showing results for {location.photoTag}</h4>
        <div className="mt-16">
        <Images photos={photos} onClick={this.handleLoadMore} />
        </div>
      </div>
    );
  }
}

export default TagDetails;
