import React, { useEffect } from "react";
import Images from "../../components/Images";
import ImagesSkeleton from "../../components/Skeletons/Images";

const Photos = ({ username, getUserPhotos, photos, isLoading }) => {
  useEffect(() => {
    getUserPhotos(username, localStorage.access_token);
  }, [username, getUserPhotos]);
  return (
    <div className="mx-2 bg-white">
      {!isLoading && photos.length === 0 && (
        <h1 className="sm:w-1/2 bg-teal-500 text-center my-4 mx-auto text-white font-bold py-1 sm:p-2 shadow-sm">
          No Photos for {username}
        </h1>
      )}

      {isLoading ? <ImagesSkeleton /> : <Images photos={photos} />}
    </div>
  );
};

export default Photos;
