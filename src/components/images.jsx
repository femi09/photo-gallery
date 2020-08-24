import React from "react";
import ImageCard from "./imageCard";

const Images = ({ photos, isLoading, onClick }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
        {!isLoading && photos.length !== 0 && (
          <div className="text-center my-16 items-center mx-auto">
            <button
              className="bg-teal-500 hover:bg-teal-800 text-white py-2 px-4 rounded outline-none focus:outline-none"
              onClick={onClick}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Images;
