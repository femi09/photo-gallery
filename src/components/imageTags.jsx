import React from "react";
import { Link } from "react-router-dom";

const ImageTags = ({ photoTags, onClick, location }) => {
  return (
    <div className="w-full bg-teal-500">
      <div className="flex text-white flex-row">
        <ul className="flex tag .disable-scrollbars overflow-x-auto flex center pt-3 px-3">
          {photoTags.map((photoTag, index) => {
            let isActive = false;
            if (location !== undefined) {
              isActive = photoTag === location.photoTag;
            }
            

            return (
            
              <li
                key={index}
                onClick={onClick}
                className={`"flex flex-none font-normal px-8 ${isActive ? "active: border-b-8 border-yellow-400":""}`}
              >
                <Link
                  to={{ pathname: `/t/${photoTag}`, state: { photoTag } }}
                >
                  {photoTag}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageTags;
