import React, {Fragment} from "react";
import ImageCard from "./ImageCard";

const Images = ({ photos, loadMore }) => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="mx-2 sm:mx-auto py-2 sm:grid sm:grid-cols-3 sm:gap-2">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
        {
          photos.length !== 0 &&
          <div className="text-center my-16 items-center mx-auto">
            <button
              className="bg-teal-500 hover:bg-teal-800 text-white py-2 px-4 rounded outline-none focus:outline-none"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        }
          
      </div>
    </Fragment>
  );
};

export default Images;
