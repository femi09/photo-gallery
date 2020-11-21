import React from "react";
import { Link } from "react-router-dom";

const ProfileTab = ({ username }) => {
  return (
    <div>
      <div className="sm:my-8 py-1  sm:py-2 text-gray-600 text-sm border-b">
        <ul className="flex sm:w-1/2 lg:w-1/3 xl:w-1/4 justify-around font-bold">
          <Link to={`/profile/${username}/photos`}>
            <div className="flex items-center">
              <img className="w-4 h-4 mx-2" src="/assets/photo-2.png" alt="" />
              <li className="cursor-pointer">Photos</li>
            </div>
          </Link>
          <Link to={`/profile/${username}/likes`}>
            <div className="flex items-center">
              <img
                className="w-4 h-4 mx-2"
                src="/assets/green-love.png"
                alt=""
              />
              <li className="cursor-pointer">Likes</li>
            </div>
          </Link>
          <Link to={`/profile/${username}/collections`}>
            <div className="flex items-center">
              <img className="w-4 h-4 mx-2" src="/assets/server.png" alt="" />
              <li className="cursor-pointer">Collections</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default ProfileTab;
