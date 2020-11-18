import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProfileTop = ({ user }) => {
  return (
    <Fragment>
      <div className="flex flex-col container items-center justify-center bg-teal-500 text-white mx-auto w-3/4 mt-4 mb-1 p-4">
        <img className="w-40 h-40" src="/assets/user.png" alt="" />
        <h1 className="font-bold text-2xl my-2">{user.name}</h1>
        <p className="sm:w-1/2 text-center my-1">
          Download free, beautiful, high-quality photos curated by Femi
        </p>
        <div className="hidden sm:flex my-1 justify-between font-bold">
          <p className="px-4">
            <span className="text-yellow-300">{user.total_photos}</span> photos
          </p>
          <p className="px-4">
            <span className="text-yellow-300">{user.downloads}</span> downloads
          </p>
          <p className="px-4">
            <span className="text-yellow-300">{user.followers_count}</span>{" "}
            followers
          </p>
          <p className="px-4">
            <span className="text-yellow-300">{user.following_count}</span>{" "}
            following
          </p>
        </div>
        <div className="sm:hidden text-sm flex my-1 justify-between font-bold">
          <div className="flex flex-col items-center mx-2">
            <span className="text-yellow-300">{user.total_photos}</span>
            <span>photo</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-yellow-300">{user.downloads}</span>
            <span>downloads</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-yellow-300">{user.followers_count}</span>{" "}
            <span>followers</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <span className="text-yellow-300">{user.following_count}</span>{" "}
            <span>following</span>
          </div>
        </div>
        <div className="flex justify-between my-2 text-xs font-bold">
          <p className="bg-white text-gray-700 px-2 py-1 mx-1 rounded">City</p>
          <p className="bg-white text-gray-700 px-2 py-1 mx-1 rounded">Urban</p>
        </div>
        <div className="flex">
          <button className="bg-white text-teal-500 border px-2 py-1 my-4 mx-2 rounded font-bold">
            Edit Profile
          </button>
          <Link to="/">
            <button className="bg-white text-teal-500 border px-2 py-1 my-4 rounded font-bold">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTop;
