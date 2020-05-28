import React, { Component } from "react";
import ImageTags from "./../components/imageTags";
import Images from "./../components/images";
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";

class TagDetails extends Component {
  state = {
    photos: [],
    isLoading: true,
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
    const Tagname = this.props.location.state.photoTag;
    console.log(Tagname);
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=30&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );
    const photos = data.results;
    this.setState({ photos, isLoading:false });
  }
  handleTagClick = async (e) => {
    const Tagname = e.target.innerText;
    console.log(Tagname);
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=30&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const photos = data.results;
    this.setState({ photos, isLoading:false });
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
         <h4 className="text-3xl text-center text-teal-500 mx-auto mt-8">Showing results for {location.photoTag}</h4>
        <div className="mt-16">
          <Images photos={photos} />
        </div>
      </div>
    );
  }
}

export default TagDetails;
