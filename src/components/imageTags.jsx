import React from "react";

const ImageTags = ({ photoTags, onClick }) => {
  return (
    <div className="w-full bg-teal-500">
      <div className="flex text-white hover:text-grey-600 flex-row ml-6">
        <ul className="w-full  flex center">
          {
            photoTags.map((photoTag, index) => 
            <li key={index} onClick={onClick} className="mr-6 cursor-pointer">{photoTag}</li>
            )}
          
        </ul>
      </div>
    </div>
  );
};

export default ImageTags;
