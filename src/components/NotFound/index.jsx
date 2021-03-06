import React from "react";

const NotFound = ({ searchTerm }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-6xl text-center mx-auto mt-32">
        No Photos Found for {searchTerm}
      </h1>
     
    </div>
  );
};

export default NotFound;
