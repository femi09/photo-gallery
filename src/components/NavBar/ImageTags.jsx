import React from "react";
import { Link } from "react-router-dom";
import { photoTags } from "../../utils";
import { loadClickedPhotoTags } from "../../store/actions/photos";
import { connect } from "react-redux";

const ImageTags = ({ location, loadClickedTag }) => {
  const handleTagClick = async (e) => {
    const tagname = e.target.innerText;
    loadClickedTag(tagname);
  };
  return (
    <div className="w-full bg-teal-500">
      <div className="flex text-white flex-row">
        <ul className="flex tag .disable-scrollbars overflow-x-auto center pt-3 sm:px-3">
          {photoTags.map((photoTag, index) => {
            let isActive = false;
            if (location !== undefined) {
              isActive = photoTag === location.photoTag;
            }
            return (
              <li
                key={index}
                onClick={handleTagClick}
                className={`"flex flex-none font-normal px-4 sm:px-8 ${
                  isActive ? "active: border-b-8 border-yellow-400" : ""
                }`}
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

const mapDispatchToProps = (dispatch) => ({
  loadClickedTag: (tagname) => dispatch(loadClickedPhotoTags(tagname)),
});

export default connect(null, mapDispatchToProps)(ImageTags);
