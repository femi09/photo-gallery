import React, { useState } from "react";

const Dropdown = ({ user, logout }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <div
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setShow(!show)}
          >
            welcome {user.username}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </span>
      </div>
      <div
        className={`${
          show
            ? "origin-top-right z-40 absolute right-0 mt-2 w-40 rounded-md shadow-lg"
            : "hidden origin-top-right z-40 absolute right-0 mt-2 w-40 rounded-md shadow-lg"
        }`}
      >
        <div
          className="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="flex items-center py-1 px-2">
            <img className="w-4 h-4" src="/assets/user.png" alt="" />
            <a
              href="#"
              className="block px-2 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              view profile
            </a>
          </div>
          <div className="border-t border-gray-100"></div>
          <div onClick={logout} className="flex items-center py-1 px-2">
            <img className="w-4 h-4" src="/assets/logout-2.png" alt="" />
            <span
              className="block px-2 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
