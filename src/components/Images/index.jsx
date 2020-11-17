import React, { Fragment, useState } from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";
import LoginWithUnsplash from "../Modal";
import { likePhoto, unLikePhoto } from "../../store/actions/photos";

const Images = ({ photos, loadMore, likePhoto, unLikePhoto, isAuthenticated }) => {
  const [visible, setVisible] = useState(false);
  const token = localStorage.access_token;

  const OpenModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleLikePhoto = (photo_id) => {
    if (isAuthenticated) {
      likePhoto(photo_id, token);
    } else {
      OpenModal();
    }
  };
  const handleUnlikePhoto = (photo_id) => {
    if (isAuthenticated) {
      unLikePhoto(photo_id, token);
    } else {
      OpenModal();
    }
  };
  return (
    <Fragment>
      <div className="container mx-auto">
        {visible ? <LoginWithUnsplash closeModal={closeModal} /> : null}
        <div className="mx-2 sm:mx-auto py-2 sm:grid sm:grid-cols-3 sm:gap-2">
          {photos.map((photo) => (
            <ImageCard
              key={photo.id}
              photo={photo}
              handleLikePhoto={handleLikePhoto}
              handleUnlikePhoto={handleUnlikePhoto}
            />
          ))}
        </div>
        {photos.length !== 0 && (
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

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  likePhoto: (token, photo_id) => dispatch(likePhoto(token, photo_id)),
  unLikePhoto: (token, photo_id) => dispatch(unLikePhoto(token, photo_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
