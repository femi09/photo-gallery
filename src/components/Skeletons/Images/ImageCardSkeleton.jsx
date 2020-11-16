import React from "react";
import Skeleton from "react-loading-skeleton";

const ImageCardSkeleton = () => {
  return (
    <div className="my-4 sm:mb-0 sm:max-w-sm overflow-auto shadow-md sm:rounded">
      <div>
        <Skeleton height={300} width={`100%`} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">
          <Skeleton width={`70%`} height={20} />
        </div>
        <div>
          <div className="">
            <p>
              <Skeleton width={`100%`} height={20} />
            </p>
            <p>
              <Skeleton width={`100%`} height={20} />
            </p>
            <p>
              <Skeleton width={`100%`} height={20} />
            </p>
          </div>
          <div className="my-4">
            <Skeleton width={100} height={20} />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        {Array(3)
          .fill()
          .map((item, index) => (
            <span
              key={index}
              className="inline-block rounded-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              <Skeleton width={50} height={20} />
            </span>
          ))}
      </div>
    </div>
  );
};

export default ImageCardSkeleton;