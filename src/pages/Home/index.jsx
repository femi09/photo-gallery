import React, { useEffect } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { client_Id, client_secret, redirect_uri } from "../../config.json";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";
import ImageTags from "../../components/NavBar/ImageTags";
import ImageSearch from "../../components/Images/ImageSearch";
import NotFound from "../../components/NotFound";
import { loadPhotos, loadMorePhotos } from "../../store/actions/photos";
import { getAccessToken } from "../../store/actions/auth";
import { loadClickedPhotoTags } from "../../store/actions/photos";

const HomePage = ({
  photos,
  isLoading,
  searchTerm,
  loadMore,
  clicked,
  getAccessToken,
  location,
  history,
  loadPhotos,
  loadClickedTag,
  error,
}) => {
  useEffect(() => {
    const { search } = location;
    if (search) {
      const { code } = queryString.parse(search);
      const grant_type = "authorization_code";
      getAccessToken(
        client_Id,
        client_secret,
        redirect_uri,
        code,
        grant_type,
        history
      );
    }
    loadPhotos();
  }, [getAccessToken, loadPhotos, history, location]);

  const handleTagClick = async (e) => {
    const tagname = e.target.innerText;
    loadClickedTag(tagname);
  };
  return (
    <div className="h-screen">
      <ImageTags onClick={handleTagClick} />
      <div className="flex-1 overflow-y-auto">
        <ImageSearch />
        {!isLoading && clicked && searchTerm !== "" && photos.length === 0 && (
          <NotFound searchTerm={searchTerm} />
        )}
        {!isLoading && clicked && searchTerm !== "" && photos.length !== 0 && (
          <h4 className="text-xl my-4 sm:text-3xl text-center text-teal-500 mx-auto sm:my-8">
            Showing results for {searchTerm}
          </h4>
        )}
        {isLoading ? (
          <ImagesSkeleton />
        ) : !isLoading && photos ? (
          <Images photos={photos} isLoading={isLoading} loadMore={loadMore} />
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ images, auth }) => ({
  photos: images.photos,
  isLoading: images.isLoading,
  searchTerm: images.searchTerm,
  clicked: images.clicked,
  isAuthenticated: auth.isAuthenticated,
  token: auth.access_token,
  error: images.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: () => dispatch(loadPhotos()),
  loadMore: () => dispatch(loadMorePhotos()),
  loadClickedTag: (tagname) => dispatch(loadClickedPhotoTags(tagname)),
  getAccessToken: (
    client_Id,
    client_secret,
    redirect_uri,
    code,
    grant_type,
    history
  ) =>
    dispatch(
      getAccessToken(
        client_Id,
        client_secret,
        redirect_uri,
        code,
        grant_type,
        history
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
