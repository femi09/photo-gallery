import React, { Component } from "react";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images"
import ImageTags from "../../components/NavBar/ImageTags";
import ImageSearch from "../../components/Images/ImageSearch";
import NotFound from "../../components/NotFound";
import { loadPhotos, loadMorePhotos } from "../../store/actions";
import { loadClickedPhotoTags } from "../../store/actions";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.loadPhotos();
  }

   handleTagClick = async (e) => {
    const tagname = e.target.innerText;
    console.log(tagname)
     this.props.loadClickedTag(tagname)
  };

  render() {
    const { photos, isLoading, searchTerm, loadMore, clicked } = this.props;
    return (
      <div className="h-screen">
        <ImageTags onClick={this.handleTagClick}/>
        <div className="flex-1 overflow-y-auto">
          <ImageSearch/>
          {!isLoading && clicked && searchTerm !=="" && photos.length === 0 && <NotFound searchTerm={searchTerm}/>}
          {!isLoading && clicked && searchTerm !=="" && photos.length !==0 && <h4 className="text-xl my-4 sm:text-3xl text-center text-teal-500 mx-auto sm:my-8">Showing results for {searchTerm}</h4>}
          {isLoading && photos.length === 0 ? <ImagesSkeleton/>
          :
          <Images
            photos={photos}
            isLoading={isLoading}
            loadMore={loadMore}
          />
          }
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ images}) => ({
  photos: images.photos,
  isLoading:images.isLoading,
  searchTerm: images.searchTerm,
  clicked: images.clicked
});

const mapDispatchToProps = (dispatch) => ({
  loadPhotos: () => dispatch(loadPhotos()),
  loadMore: () => dispatch(loadMorePhotos()),
  loadClickedTag: (tagname) => dispatch(loadClickedPhotoTags(tagname))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
