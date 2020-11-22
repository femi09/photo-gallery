import React, { Fragment } from "react";

const ProfileTop = ({ profile }) => {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row sm:justify-center justify-around items-center sm:py-8 sm:w-2/3 sm:mx-auto">
        <div className="">
          <img
            className="w-32 h-32 rounded-full"
            src={profile.profile_image.large}
            alt=""
          />
        </div>
        <div className="flex my-1 flex-col sm:my-0 sm:mx-4 sm:px-4">
          <div className="text-center sm:text-left sm:flex sm:items-start">
            <h1 className="text-3xl sm:text-4xl text-teal-500 font-bold sm:mr-2 mb-2">
              {profile.name}
            </h1>
            <button className="hidden sm:block px-2 py-1 text-white font-bold text-sm bg-teal-500 rounded-sm">
              Edit Profile
            </button>
          </div>

          {/* Location, Social Media and Portfolio */}
          <div className="flex flex-col items-center sm:flex-row mx-auto justify-center sm:w-full sm:mx-0 justify-around sm:justify-start text-gray-700 text-sm">
            {profile.location && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img
                  className="w-4 h-4 mr-1"
                  src="/assets/placeholder.png"
                  alt=""
                />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.instagram_username && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img
                  className="w-4 h-4 mr-1"
                  src="/assets/instagram.png"
                  alt=""
                />
                <span>{profile.instagram_username}</span>
              </div>
            )}
            {profile.portfolio_url && (
              <div className="flex items-center sm:justify-between sm:mr-4">
                <img className="w-4 h-4 mr-1" src="/assets/link.png" alt="" />
                <span>{profile.portfolio_url}</span>
              </div>
            )}
          </div>

          <div className="hidden my-2 font-bold text-teal-600 overflow-x-auto sm:flex">
            <p className="mr-4">{profile.total_photos} photos</p>
            <p className="mr-4">{profile.downloads} downloads</p>
            <p className="mr-4">{profile.followers_count} followers</p>
            <p className="mr-4">{profile.following_count} following</p>
          </div>

          {/* bio*/}
          <p className="text-center sm:text-left p-2 sm:p-0 text-gray-700">
            {profile.bio
              ? profile.bio
              : "Download free, beautiful high quality photos curated by Femi"}
          </p>

          <div className="flex border-b border-t justify-around text-sm my-2 font-bold text-teal-500 sm:hidden">
            <div className="w-1/3 flex flex-col px-1 mx-2 items-center text-center justify-center">
              <span>{profile.total_photos}</span>
              <span>photos</span>
            </div>
            <div className="w-1/3 flex flex-col px-1 mx-2 items-center text-center justify-center">
              <span>{profile.followers_count}</span>
              <span>followers</span>
            </div>
            <div className="w-1/3 flex flex-col px-1 mx-2  items-center text-center justify-center">
              <span>{profile.following_count}</span>
              <span>following</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTop;
