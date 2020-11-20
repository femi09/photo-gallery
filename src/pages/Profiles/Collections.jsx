import React, { useEffect } from "react";
import Images from "../../components/Images"

const Collections = ({ username, getUserCollection, photos, isLoading }) => {
  useEffect(() => {
    getUserCollection(username, localStorage.access_token);
  }, [username, getUserCollection]);
  return (
    <div className="w-3/4 mx-auto bg-white">
      {photos.length === 0 && !isLoading ? (
        <h1 className="w-1/2 bg-teal-500 text-center my-4 mx-auto text-white font-bold p-2 shadow-sm">
          You Have 0 photos in your collection
        </h1>
      ) : (
        <Images photos={photos}/>
      )}
    </div>
  );
};

export default Collections;
