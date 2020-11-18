import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageCard = ({
  photo,
  handleLikePhoto,
  handleUnlikePhoto,
  handleDownload,
  photo_url,
}) => {
  const [show, setShow] = useState(false);

  // converting array of objects into array of properties. so i can access the
  // title properties of the tags array
  const tags = photo.tags ? photo.tags.map((obj) => obj.title) : null;
  return (
    <div className="my-4 sm:mb-0 sm:max-w-sm overflow-auto shadow-md sm:rounded">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={photo.user.profile_image.small}
            alt=""
          />
          <p className="text-xs font-bold text-teal-500">
            {photo.user.username}
          </p>
        </div>
        {photo.liked_by_user ? (
          <div
            onClick={() => handleUnlikePhoto(photo.id)}
            className="flex items-center"
          >
            <img
              className="w-6 h-6 cursor-pointer mr-2"
              src="/assets/heart-filled-2.png"
              alt=""
            />
          </div>
        ) : (
          <div
            onClick={() => handleLikePhoto(photo.id)}
            className="flex items-center"
          >
            <img
              className="w-6 h-6 cursor-pointer mr-2"
              src="/assets/heart-empty-2.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="relative"
      >
        <Link
          to={`${photo.urls.small}.jpg`}
          download={`${photo.urls.small}.jpg`}
        >
        <img src={photo.urls.small} alt="" className="w-full" />
        
          <img
            className={`${
              show
                ? "absolute top-0 right-0 my-2 mx-2 w-8 h-8 cursor-pointer"
                : "hidden absolute top-0 right-0 my-2 mx-2 w-8 h-8 cursor-pointer"
            }`}
            src="/assets/download.png"
            alt=""
            onClick={() => handleDownload(photo.id)}
          />
        </Link>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">
          Photo by {photo.user.name}
        </div>
        <div>
          <p>
            <strong className="text-teal-700">Description: </strong>
            <span className="text-sm font-bold">{photo.description}</span>
          </p>
          <p className="py-2 text-green-700 font-bold">
            <strong className="text-green-600">Likes: </strong>
            {photo.likes}
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};
export default ImageCard;
