import React, { useEffect } from "react";
import Collection from "./Collection";


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
    <div className="mx-2 bg-white sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
      {isLoading ? (
        <h1 className="text-lg sm:text-2xl text-center font-bold p-1 sm:p-2 text-teal-500">Loading Your Collections...</h1>
      ) : (
        collections.map((collection) =>
          collection.total_photos >= 1 ? (
            <Collection key={collection.id} collection={collection} />
          ) : (
            <h1 key={collection.id} className="sm:mx-auto bg-teal-500 text-center my-4 mx-auto text-white font-bold py-2 sm:p-2 shadow-sm">
            You Have 0 photos in your collection
          </h1>
          )
        )
      )}

      {!isLoading && collections.length === 0 && (
        <h1 className="mx-auto bg-teal-500 text-center my-4 text-white font-bold py-2 sm:p-2 shadow-sm">
          You Have No collections
        </h1>
      )}
    </div>
  );
};

export default Collections;
