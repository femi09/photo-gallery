import React from "react";
import ImageCardSkeleton from "./ImageCardSkeleton";

const ImagesSkeleton = () => {
  return (
      <div className="container mx-auto">
        <div className="mx-2 sm:mx-auto py-2 sm:grid sm:grid-cols-3 sm:gap-2">
          {Array(20).fill().map((item, index) => (
            <ImageCardSkeleton key={index}/>
          ))}
        </div>
      </div>
  );
};

export default ImagesSkeleton;
