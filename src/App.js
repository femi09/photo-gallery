import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

class App extends Component {
  state = {
    photos: [],
    Searchterm: "",
    isLoading: true,
  };
  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.unsplash.com/search/photos?query=office&client_id=i-MziJcxj3BaybCrXFeJNx4knOnS6c-93rnEoPFbHLA"
    );
    const photos = data.results;
    this.setState({ photos });
  }

  render() {
    const { photos } = this.state;
    return (
      <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
