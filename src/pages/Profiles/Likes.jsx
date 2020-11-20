import React, { useEffect } from "react";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";

const Likes = ({ getLikedPhotos, username, photos, isLoading }) => {
  useEffect(() => {
    getLikedPhotos(username, localStorage.access_token);
  }, [username, getLikedPhotos]);
  return (
    <div className="w-3/4 mx-auto bg-white">
      {photos.length === 0 && !isLoading ? (
        <h1 className="w-1/2 bg-teal-500 text-center my-4 mx-auto text-white font-bold p-2 shadow-sm">
          You Haven't Liked Any Photos
        </h1>
      ) : isLoading ? (
        <ImagesSkeleton />
      ) : (
        <Images photos={photos} />
      )}
    </div>
  );
};

export default Likes;
