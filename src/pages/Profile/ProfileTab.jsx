import React from "react";
import { Link } from "react-router-dom";

const ProfileTab = ({user}) => {
  return (
    <div>
      <div className="bg-teal-500 mx-auto w-3/4 py-2 text-white">
        <ul className="w-1/2 flex justify-between font-bold">
          <Link to={`/profile/${user.username}/photos`}>
            <div className="flex items-center px-2">
              <img className="w-4 h-4 mx-2" src="/assets/photo-2.png" alt="" />
              <li className="cursor-pointer">Photos</li>
            </div>
          </Link>
          <Link to={`/profile/${user.username}/likes`}>
            <div className="flex items-center px-2">
              <img className="w-4 h-4 mx-2" src="/assets/heart-filled.png" alt="" />
              <li className="cursor-pointer">Likes</li>
            </div>
          </Link>
          <Link to={`/profile/${user.username}/colletions`}>
            <div className="flex items-center px-2">
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
