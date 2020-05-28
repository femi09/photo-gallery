import React, { Component } from "react";
import Images from "../components/images";
import ImageTags from "../components/imageTags";
import ImageSearch from "./../components/imageSearch";
import NotFound from "./../components/notFound";
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";

class HomePage extends Component {
  state = {
    photos: [],
    searchTerm: "",
    clicked: false,
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
    this.setState({ photos, isLoading: false, clicked: true});
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
    this.setState({ photos, isLoading:false });
  };

  render() {
    const { photos, isLoading, photoTags, searchTerm, clicked } = this.state;
    const {state: location} = this.props.location
    return (
      <div>
        <ImageTags photoTags={photoTags} onClick={this.handleTagClick} location={location} />
        <ImageSearch
          value={searchTerm}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {!isLoading && photos.length === 0 && <NotFound photos={photos} />}
       {clicked && searchTerm !== '' && photos.length !==0 && <h4 className="text-3xl text-center text-teal-500 mx-auto my-8">Showing results for {searchTerm}</h4>}
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
