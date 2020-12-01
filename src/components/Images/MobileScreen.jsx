import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MobileScreen = ({
  photo,
  handlePublicUser,
  handleLikePhoto,
  handleUnlikePhoto,
  handleDownload,
  token,
}) => {
  return (
    <Fragment>
      <div className="relative shadow-md sm:hidden">
        <div className="flex items-center text-sm absolute top-0 right-0 px-2 py-1 m-2 text-white bg-black bg-opacity-25">
          <img className="w-4 h-4 mr-2" src="/assets/green-love.png" alt="" />
          <span>{photo.likes}</span>
        </div>
        <img
          src={photo.urls.small}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bg-black bg-opacity-0 bottom-0 inset-x-0 flex justify-between px-2 py-2 items-center">
          {!token ? (
            <div
              className="flex items-center cursor-pointer"
              onClick={handlePublicUser}
            >
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={photo.user.profile_image.small}
                alt=""
              />
              <p className="text-xs font-bold text-white">
                {photo.user.username}
              </p>
            </div>
          ) : (
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
          )}
          <div className="flex">
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

      <div className="sm:hidden shadow-md px-2 py-4 mb-4">
        <div>
          <span className="font-bold text-teal-500 text-md">
            Photo by {photo.user.name}
          </span>
          <div className="py-2">
            <p>
              <strong className="text-teal-500">Description: </strong>
              <span className="text-sm leading-loose text-gray-700 font-bold">
                {photo.description}
              </span>
            </p>
          </div>
        </div>
        <div className="my-2">
          {photo.tags &&
            photo.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-4 my-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {tag.title}
              </span>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MobileScreen;
