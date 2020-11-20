import React, { useEffect } from "react";
import Images from "../../components/Images"

const Photos = ({ username, getUserPhotos, photos, isLoading }) => {
  useEffect(() => {
    getUserPhotos(username, localStorage.access_token);
  }, [username, getUserPhotos]);
  return (
    <div className="w-3/4 mx-auto bg-white">
      {photos.length === 0 && !isLoading ? (
        <h1 className="w-1/2 bg-teal-500 text-center my-4 mx-auto text-white font-bold p-2 shadow-sm">
          No Photos for {username}
        </h1>
      ) : (
        <Images photos={photos} />
      )}
    </div>
  );
};

export default Photos;
