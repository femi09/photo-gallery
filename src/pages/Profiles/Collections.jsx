import React, { useEffect } from "react";

const Collections = ({
  username,
  getUserCollection,
  collections,
  isLoading,
}) => {
  useEffect(() => {
    getUserCollection(username, localStorage.access_token);
  }, [username, getUserCollection]);
  return (
    <div className="mx-2 bg-white sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-4">
      {!isLoading && collections.length === 0 ? (
        <h1 className="sm:mx-auto bg-teal-500 text-center my-4 mx-auto text-white font-bold py-2 sm:p-2 shadow-sm">
          You Have 0 photos in your collections
        </h1>
      ) : (
        collections.map((collection) => (
          <div
            key={collection.id}
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
                <span className="mx-2">Curated by {username}</span>
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
        ))
      )}
    </div>
  );
};

export default Collections;
