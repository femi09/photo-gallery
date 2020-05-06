import React from "react";

const ImageCard = ({ photo }) => {
  // converting array of objects into array of properties. so i can access the
  // title properties of the tags array
  const tags = photo.tags.map((obj) => obj.title);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={photo.urls.regular} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">
          Photo by {photo.user.name}
        </div>
        <ul>
          <li>
            <strong className="text-blue-300">Description: </strong>
            {photo.description}
          </li>
          <li>
            <strong>Likes: </strong>
            {photo.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span key={tag} className="inline-block bg-gray-200 rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
