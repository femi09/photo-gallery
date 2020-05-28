import React, { Component } from "react";
import ImageCard from "./imageCard";

const Images = ({ photos, isLoading}) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
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
