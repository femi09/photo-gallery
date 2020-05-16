import React from "react";
import { Link } from "react-router-dom";

const ImageTags = ({ photoTags, onClick }) => {
  return (
    <div className="w-full bg-teal-500">
      <div className="flex text-white flex-row">
        <ul className="flex tag .disable-scrollbars overflow-x-auto flex center p-3">
          
            {photoTags.map((photoTag, index) => (
              <li
                key={index}
                onClick={onClick}
                className="flex flex-none font-normal px-8 hover:font-bold cursor-pointer"
              >
                <Link to="/t">
                {photoTag}
                </Link>
                
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageTags;
