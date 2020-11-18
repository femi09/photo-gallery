import React from "react";
import ImageTags from "../../components/NavBar/ImageTags";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";
import { connect } from "react-redux";
import {
  loadClickedPhotoTags,
  loadMorePhotos,
} from "../../store/actions/photos";
import { useEffect } from "react";

const TagDetails = ({
  location: { state },
  photos,
  isLoading,
  loadMore,
  loadPhotos,
}) => {
  //fetching images on tag page mount
  useEffect(() => {
    const { photoTag: tagname } = state;
    loadPhotos(tagname);
  }, [loadPhotos, state]);

  //To fetch images when you click a tag from another tag's page
  // handleLoadMore = async () => {
  //   const tagname = this.props.location.state.photoTag;
  // };
  return (
    <div>
      <ImageTags location={state} />
      {!isLoading && photos && (
        <h4 className="text-2xl sm:text-3xl text-center text-teal-500 mx-auto mt-8">
          Showing results for {state.photoTag}
        </h4>
      )}
      {isLoading ? (
        <ImagesSkeleton />
      ) : (
        <div className="mt-4">
          <Images photos={photos} loadMore={loadMore} />
        </div>
      )}
    </div>
  );
};

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
