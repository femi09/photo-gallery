import React, { Component } from "react";
import ImageTags from "../../components/NavBar/ImageTags";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";
import { connect } from "react-redux";
import { loadClickedPhotoTags, loadMorePhotos } from "../../store/actions/photos";


class TagDetails extends Component {
  //fetching images on tag page mount
  async componentDidMount() {
    const tagname = this.props.location.state.photoTag;
    const { loadPhotos } = this.props;
    loadPhotos(tagname);
  }

  //To fetch images when you click a tag from another tag's page
  // handleLoadMore = async () => {
  //   const tagname = this.props.location.state.photoTag;
  // };

  render() {
    const { state: location } = this.props.location;
    const { photos, isLoading, loadMore } = this.props;
    return (
      <div>
        <ImageTags location={location} />
        {!isLoading && photos && (
          <h4 className="text-2xl sm:text-3xl text-center text-teal-500 mx-auto mt-8">
            Showing results for {location.photoTag}
          </h4>
        )}
        {isLoading ? (
          <ImagesSkeleton/>
        ) : (
          <div className="mt-4">
            <Images photos={photos} loadMore={loadMore} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => ({
  photos: images.photos,
  isLoading: images.isLoading,
  searchTerm: images.searchTerm,
  clicked: images.clicked,
});

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: (tagname) => dispatch(loadClickedPhotoTags(tagname)),
  loadMore: () => dispatch(loadMorePhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagDetails);
