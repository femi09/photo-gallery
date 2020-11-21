import React, { Fragment } from "react";

const ProfileTop = ({ user }) => {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row sm:justify-center justify-around items-center sm:py-8 sm:w-2/3 sm:mx-auto">
        <div className="">
          <img
            className="w-32 h-32 rounded-full"
            src={user.profile_image.large}
            alt=""
          />
        </div>
        <div className="flex my-4 flex-col sm:my-0 sm:mx-4 sm:px-4">
          <div className="text-center sm:text-left sm:flex sm:items-start">
            <h1 className="text-3xl sm:text-4xl text-teal-500 font-bold sm:mr-2 mb-2">
              {user.name}
            </h1>
            <button className="hidden sm:block px-2 py-1 text-white font-bold text-sm bg-teal-500 rounded-sm">
              Edit Profile
            </button>
          </div>

          {/* Location, Social Media and Portfolio */}
          <div className="w-2/3 jsutify-center sm:w-full sm:mx-0 justify-around sm:justify-start text-center text-gray-700 text-sm sm:flex">
            {user.location && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img
                  className="w-4 h-4 mr-1"
                  src="/assets/placeholder.png"
                  alt=""
                />
                <span>{user.location}</span>
              </div>
            )}
            {user.instagram_username && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img
                  className="w-4 h-4 mr-1"
                  src="/assets/instagram.png"
                  alt=""
                />
                <span>{user.instagram_username}</span>
              </div>
            )}
            {user.portfolio_url && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img className="w-4 h-4 mr-1" src="/assets/link.png" alt="" />
                <span>{user.portfolio_url}</span>
              </div>
            )}
          </div>

          <div className="hidden my-2 font-bold text-teal-600 overflow-x-auto sm:flex">
            <p className="mr-4">{user.total_photos} photos</p>
            <p className="mr-4">{user.downloads} downloads</p>
            <p className="mr-4">{user.followers_count} followers</p>
            <p className="mr-4">{user.following_count} following</p>
          </div>

          {/* bio*/}
          <p className="text-center sm:text-left p-2 sm:p-0 text-gray-700">
            {user.bio
              ? user.bio
              : "Download free, beautiful high quality photos curated by Femi"}
          </p>

          <div className="flex border-b border-t justify-around text-sm my-2 font-bold text-teal-500 sm:hidden">
            <div className="flex flex-col px-1 items-center text-center justify-center">
              <span>{user.total_photos}</span>
              <span>photos</span>
            </div>
            <div className="flex flex-col px-1 mx-2 items-center text-center justify-center">
              <span>{user.followers_count}</span>
              <span>followers</span>
            </div>
            <div className="flex flex-col px-1 mx-2  items-center text-center justify-center">
              <span>{user.following_count}</span>
              <span>following</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTop;
