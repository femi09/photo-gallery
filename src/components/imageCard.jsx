import React from "react";

const ImageCard = ({ photo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={photo.urls.regular} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-green-500 text-xl mb-2">
          Photo by {photo.user.name}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong className='text-blue-300'>Description: {photo.description}</strong>
          </li>
          <li>
            <strong>Likes: </strong>
            {photo.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
