import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const ImageCard = ({
  photo,
  handleLikePhoto,
  handleUnlikePhoto,
  handleDownload,
  handlePublicUser,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div
        className={`my-4 hidden sm:block relative row-span-${Math.ceil(
          photo.height / photo.width
        )} sm:my-0 sm:rounded`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {/* Large Screen */}
        <div
          className={`${
            show
              ? "flex items-center text-sm absolute top-0 right-0 px-2 py-1 m-2 text-white bg-black bg-opacity-25"
              : "hidden"
          }`}
        >
          <img className="w-4 h-4 mr-2" src="/assets/green-love.png" alt="" />
          <span>{photo.likes}</span>
        </div>

        {/* PHOTO */}
        <img
          src={photo.urls.small}
          alt=""
          className="hidden sm:block w-full h-full object-cover"
        />

        <div
          className={`${
            show
              ? "absolute bg-black bg-opacity-0 bottom-0 inset-x-0 flex justify-between px-2 py-2 items-center"
              : "hidden"
          }`}
        >
          {/* User- Large Screen */}
          <Link to={`/${photo.user.username}`}>
            <div className="flex items-center" onClick={handlePublicUser}>
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={photo.user.profile_image.small}
                alt=""
              />
              <p className="text-xs font-bold text-white">
                {photo.user.username}
              </p>
            </div>
          </Link>

          {/* Actions - Large Screen */}
          <div
            className="flex z-10"
          >
            <img
              className="my-2 mx-1 w-6 h-6 cursor-pointer"
              src="/assets/white-download.png"
              alt=""
              onClick={() => handleDownload(photo.id)}
            />

            {photo.liked_by_user ? (
              <div
                onClick={() => handleUnlikePhoto(photo.id)}
                className="flex items-center"
              >
                <img
                  className="w-6 h-6 cursor-pointer mx-1"
                  src="/assets/healthcare.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => handleLikePhoto(photo.id)}
                className="flex items-center"
              >
                <img
                  className="w-6 h-6 cursor-pointer mx-1"
                  src="/assets/love.png"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ImageCard;
