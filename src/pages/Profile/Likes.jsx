import React, { useEffect } from "react";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";

const Likes = ({ getLikedPhotos, username, photos, isLoading }) => {
  useEffect(() => {
    getLikedPhotos(username, localStorage.access_token);
  }, [username, getLikedPhotos]);
  return (
    <div className="mx-2 bg-white">
      {!isLoading && photos.length === 0 && (
        <h1 className="sm:w-1/2 bg-teal-500 text-center my-4 sm:mx-auto text-white font-bold py-1 sm:p-2 shadow-sm">
          You Haven't Liked Any Photos
        </h1>
      )}
      {isLoading ? <ImagesSkeleton /> : <Images photos={photos} />}
    </div>
  );
};

export default Likes;
