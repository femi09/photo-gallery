import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="flex bg-teal-500 p-6">
        <div className="flex items-center justify-between flex-shrink-0 text-white ">
          <div>
            <span className="font-semibold text-xl tracking-tight">
              <Link to="/">Spectrum</Link>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
