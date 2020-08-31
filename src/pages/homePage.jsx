import React, { Component } from "react";
import Images from "../components/images";
import ImageTags from "../components/imageTags";
import ImageSearch from "./../components/imageSearch";
import NotFound from "./../components/notFound";
import Login from "./login";
import http from "../services/httpService";
import { unsplashApi, client_Id } from "../config.json";
import { loadPhotos, loadMorePhotos } from "../store/actions";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadPhotos();
  }

  handleTagClick = async (e) => {
    const Tagname = e.target.innerText;
    const { per_page } = this.state;
    const { data } = await http.get(
      `${unsplashApi}?page=5&per_page=${per_page}&query=${Tagname}`,
      {
        headers: { Authorization: `Client-ID ${client_Id}` },
      }
    );

    const photos = data.results;
    this.setState({ photos, isLoading: false });
  };


  render() {
    const { photos, isLoading, searchTerm, loadMore, clicked } = this.props;
    // const { state: location } = this.props.location;
    return (
      <div className="h-screen">
        {/* <ImageTags
          onClick={this.handleTagClick}
          // location={location}
        /> */}
        <div className="flex-1 overflow-y-auto">
          <ImageSearch/>
          {clicked && !isLoading && photos.length === 0 && <NotFound searchTerm={searchTerm}/>}
          {clicked && <h4 className="text-3xl text-center text-teal-500 mx-auto my-8">Showing results for {searchTerm}</h4>}
          <Images
            photos={photos}
            isLoading={isLoading}
            loadMore={loadMore}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ photos, isLoading, searchTerm, clicked }) => ({
  photos,
  isLoading,
  searchTerm,
  clicked
});

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: () => dispatch(loadPhotos()),
  loadMore: () => dispatch(loadMorePhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
