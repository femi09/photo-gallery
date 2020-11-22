import React from "react";

const Collection = ({ collection }) => {
  return (
    <div>
      <div
        className="my-4 p-2 grid grid-cols-3 gap-1 rounded-lg"
      >
        <div className="col-span-2 bg-gray-300">
          <img
            src={
              collection.preview_photos[0] &&
              collection.preview_photos[0].urls.small
            }
            className="object-cover min-h-full rounded-l-lg"
            alt=""
          />
        </div>
        <div className="grid grid-rows-2 gap-1">
          <div className="bg-gray-300 rounded-tr-lg">
            <img
              src={
                collection.preview_photos[1] &&
                collection.preview_photos[1].urls.small
              }
              alt=""
              className="object-cover min-h-full rounded-tr-lg"
            />
          </div>
          <div className="bg-gray-300 rounded-br-lg">
            <img
              src={
                collection.preview_photos[2] &&
                collection.preview_photos[2].urls.small
              }
              alt=""
              className="object-cover min-h-full rounded-br-lg"
            />
          </div>
        </div>
        <div className="max-w-full col-span-3">
          <p className="my-2 text-lg text-teal-500 font-bold">
            {collection.title}
          </p>
          <div className="mb-2 flex text-sm text-gray-600">
            <span>
              {collection.total_photos}{" "}
              {collection.total_photos > 1 ? "photos" : "photo"}
            </span>
            <span className="mx-2">Curated by {collection.user.username}</span>
          </div>
          {collection.tags &&
            collection.tags.splice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-4 my-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {tag.title}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
