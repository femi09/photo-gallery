import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const ProfileTopSkeleton = () => {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row sm:justify-center justify-around items-center sm:py-8 sm:w-2/3 sm:mx-auto">
        <div className="">
          <Skeleton circle={true} width={100} height={100} />
        </div>
        <div className="flex my-4 flex-col sm:my-0 sm:mx-4 sm:px-4">
          <div className="text-center sm:text-left sm:flex sm:items-start">
            <h1 className="sm:text-4xl text-teal-500 font-bold sm:mr-2 mb-1">
              <Skeleton width={200} height={30} />
            </h1>
          </div>

          {/* Location, Social Media and Portfolio */}
          <div className="w-2/3 jsutify-center sm:w-full sm:mx-0 justify-around sm:justify-start text-center text-gray-700 text-sm sm:flex">
            <div className="flex items-center sm:justify-between sm:mr-4">
              <span>
                <Skeleton width={80} height={15} />
              </span>
            </div>

            <div className="flex items-center sm:justify-between sm:mr-4">
              <span>
                <Skeleton width={80} height={15} />
              </span>
            </div>
            <div className="flex items-center sm:justify-between sm:mr-4">
              <span>
                <Skeleton width={80} height={15} />
              </span>
            </div>
          </div>

          <div className="hidden my-2 font-bold text-teal-600 overflow-x-auto sm:flex">
            <p className="mr-4">
              <Skeleton width={80} height={20} />
            </p>
            <p className="mr-4">
              <Skeleton width={80} height={20} />
            </p>
            <p className="mr-4">
              <Skeleton width={80} height={20} />
            </p>
            <p className="mr-4">
              <Skeleton width={80} height={20} />
            </p>
          </div>

          {/* bio*/}
          <p className="text-center sm:text-left pt-2  sm:p-0 text-gray-700">
            <Skeleton width={`100%`} height={15} />
          </p>
          <p className="text-center sm:text-left sm:p-0 text-gray-700">
            <Skeleton width={`80%`} height={15} />
          </p>
          <p className="text-center sm:text-left sm:p-0 text-gray-700">
            <Skeleton width={`80%`} height={15} />
          </p>

          <div className="flex border-b border-t justify-around text-sm my-2 font-bold text-teal-500 sm:hidden">
            <div className="flex flex-col px-1 items-center text-center justify-center">
              <span>
                <Skeleton width={20} height={20} />
              </span>
              <span>
                <Skeleton width={40} height={20} />
              </span>
            </div>
            <div className="flex flex-col px-1 mx-2 items-center text-center justify-center">
              <span>
                <Skeleton width={20} height={20} />
              </span>
              <span>
                <Skeleton width={40} height={20} />
              </span>
            </div>
            <div className="flex flex-col px-1 mx-2  items-center text-center justify-center">
              <span>
                <Skeleton width={20} height={20} />
              </span>
              <span>
                <Skeleton width={40} height={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTopSkeleton;
