import React from "react";
import { Link, useLocation } from "react-router-dom";

const ImageTags = ({ photoTags, onClick }) => {
  const { state } = useLocation();
  return (
    <div className="w-full bg-teal-500">
      <div className="flex text-white flex-row">
        <ul className="flex tag .disable-scrollbars overflow-x-auto flex center pt-3 px-3">
          {photoTags.map((photoTag, index) => {
            const isActive = photoTag === state.photoTag;
            return (
              <li
                key={index}
                onClick={onClick}
                className={`${isActive ? "flex flex-none font-normal px-8 hover active: border-b-8 border-yellow-400" : "flex flex-none font-normal px-8 hover"}`}
              >
                <Link to={{ pathname: `/t/${photoTag}`, state: { photoTag } }}>
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
