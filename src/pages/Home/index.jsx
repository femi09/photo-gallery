import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { client_Id, client_secret, redirect_uri } from "../../config.json";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";
import ImageTags from "../../components/NavBar/ImageTags";
import ImageSearch from "../../components/Images/ImageSearch";
import NotFound from "../../components/NotFound";
import { loadPhotos, loadMorePhotos } from "../../store/actions/photos";
import { getAccessToken, getUser } from "../../store/actions/auth";
import { loadClickedPhotoTags } from "../../store/actions/photos";

class HomePage extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      const { code } = queryString.parse(search);
      const grant_type = "authorization_code";
      const {history} = this.props
      this.props.getAccessToken(
        client_Id,
        client_secret,
        redirect_uri,
        code,
        grant_type,
        history
      );
    }
    this.props.loadPhotos();
  }

  handleTagClick = async (e) => {
    const tagname = e.target.innerText;
    this.props.loadClickedTag(tagname);
  };

  render() {
    const { photos, isLoading, searchTerm, loadMore, clicked } = this.props;

    return (
      <div className="h-screen">
        <ImageTags onClick={this.handleTagClick} />
        <div className="flex-1 overflow-y-auto">
          <ImageSearch />
          {!isLoading &&
            clicked &&
            searchTerm !== "" &&
            photos.length === 0 && <NotFound searchTerm={searchTerm} />}
          {!isLoading &&
            clicked &&
            searchTerm !== "" &&
            photos.length !== 0 && (
              <h4 className="text-xl my-4 sm:text-3xl text-center text-teal-500 mx-auto sm:my-8">
                Showing results for {searchTerm}
              </h4>
            )}
          {isLoading && photos.length === 0 ? (
            <ImagesSkeleton />
          ) : (
            <Images photos={photos} isLoading={isLoading} loadMore={loadMore} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ images, auth }) => ({
  photos: images.photos,
  isLoading: images.isLoading,
  searchTerm: images.searchTerm,
  clicked: images.clicked,
  isAuthenticated: auth.isAuthenticated,
  token: auth.access_token,
});

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: () => dispatch(loadPhotos()),
  loadMore: () => dispatch(loadMorePhotos()),
  loadClickedTag: (tagname) => dispatch(loadClickedPhotoTags(tagname)),
  getAccessToken: (client_Id, client_secret, redirect_uri, code, grant_type, history) =>
    dispatch(
      getAccessToken(client_Id, client_secret, redirect_uri, code, grant_type, history)
    ),
  getCurrentUser: (token) => dispatch(getUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
