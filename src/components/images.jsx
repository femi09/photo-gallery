import React, { Component } from "react";
import ImageCard from "./imageCard";
import ImageSearch from "./imageSearch";
import NotFound from "./notFound";

const Images = ({ photos, isLoading}) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        {/* {!isLoading && photos.length === 0 && <NotFound photos={photos} />} */}
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Images;
