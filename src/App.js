import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    photos: [],
    searchTerm: "",
    isLoading: true,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=3&per_page=30&query=random&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    const photos = data.results;
    const isLoading = false
    this.setState({ photos, isLoading });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=5&per_page=30&query=${searchTerm}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    const photos = data.results;

    this.setState({ photos });
  };

  handleChange = ({ currentTarget: input }) => {
    let searchTerm = this.state.searchTerm;
    searchTerm = input.value;
    this.setState({ searchTerm });
  };

  render() {
    const { photos, isLoading } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mx-auto">
          <ImageSearch
            value={this.state.searchTerm}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          {!isLoading && photos.length === 0 && <NotFound photos={photos} />}
          {isLoading ? (
            <h1 className="text-6xl text-center mx-auto mt-32">
              Photos Is Loading...
            </h1>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {photos.map((photo) => (
                <ImageCard key={photo.id} photo={photo} />
              ))}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
