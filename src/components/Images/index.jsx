import React, { Fragment, useState } from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";
import LoginWithUnsplash from "../Modal";
import {
  likePhoto,
  unLikePhoto,
  downloadPhoto,
} from "../../store/actions/write_photos";
import MobileScreen from "./MobileScreen";

const Images = ({
  photos,
  loadMore,
  likePhoto,
  unLikePhoto,
  isAuthenticated,
  downloadPhoto,
  isLoading,
  photo_url,
}) => {
  const [visible, setVisible] = useState(false);
  const token = localStorage.access_token;

  const OpenModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleDownload = (photo_id) => {
    downloadPhoto(photo_id);
  };

  const handlePublicUser = () => {
    if (!token) {
      OpenModal();
    }
  };

  const handleLikePhoto = (photo_id) => {
    if (token) {
      likePhoto(photo_id, token);
    } else {
      OpenModal();
    }
  };
  const handleUnlikePhoto = (photo_id) => {
    if (token) {
      unLikePhoto(photo_id, token);
    } else {
      OpenModal();
    }
  };
  return (
    <Fragment>
      <div className="container py-2 mx-auto">
        {visible ? <LoginWithUnsplash closeModal={closeModal} /> : null}
        <div className="mx-2 xl:mx-auto sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-4">
          {photos.map((photo) => (
            <Fragment key={photo.id}>
              <ImageCard
                photo={photo}
                handleLikePhoto={handleLikePhoto}
                handleUnlikePhoto={handleUnlikePhoto}
                handleDownload={handleDownload}
                photo_url={photo_url}
                handlePublicUser={handlePublicUser}
              />
              <MobileScreen
                photo={photo}
                handleLikePhoto={handleLikePhoto}
                handleUnlikePhoto={handleUnlikePhoto}
                handleDownload={handleDownload}
                photo_url={photo_url}
                handlePublicUser={handlePublicUser}
              />
            </Fragment>
          ))}
        </div>
        {!isLoading && photos.length !== 0 && (
          <div className="text-center my-16 items-center mx-auto">
            <button
              className="bg-teal-500 hover:bg-teal-800 text-white py-2 px-4 rounded outline-none focus:outline-none"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ images }) => ({
  photo_url: images.photo_url,
  isLoading: images.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  likePhoto: (token, photo_id) => dispatch(likePhoto(token, photo_id)),
  unLikePhoto: (token, photo_id) => dispatch(unLikePhoto(token, photo_id)),
  downloadPhoto: (photo_id) => dispatch(downloadPhoto(photo_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
