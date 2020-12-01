import React from "react";
import {
  unsplashAuthApi,
  redirect_uri,
  response_type,
  scope,
} from "../../config.json";

const LoginWithUnsplash = ({ closeModal }) => {
  return (
    <div>
      <div className="relative sm:w-1/2 my-6 mx-auto sm:inset-0 z-50 sm:flex-row justify-center items-center rounded">
        <div className="fixed sm:w-1/2 sm:left-50 left-0 right-0 mx-4 sm:mx-auto sm:p-0">
          <div className="flex items-start text-white bg-teal-500 justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h1 className="font-semibold text-xl">Spectrum</h1>
            <button
              onClick={closeModal}
              className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right leading-none font-bold font-semibold outline-none focus:outline-none"
            >
              <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block">
                ×
              </span>
            </button>
          </div>
          <div className="flex items-center bg-gray-200 py-8">
            <a
             href={`${unsplashAuthApi}/authorize?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}
              className="mx-auto bg-teal-500 hover:bg-teal-800 text-white px-6 py-3 font-bold border-b-4 border-yellow-200 hover:border-b-500 rounded outline-none focus:outline-none"
            >
              Login With Unsplash
            </a>
          </div>
        </div>
      </div>
      <div
        onClick={closeModal}
        className="opacity-50 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
  );
};

export default LoginWithUnsplash;
