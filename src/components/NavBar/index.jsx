import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import {
  unsplashAuthApi,
  client_Id,
  redirect_uri,
  response_type,
  scope,
} from "../../config.json";

const NavBar = ({ isAuthenticated, logout, user }) => {
  return (
    <React.Fragment>
      <nav className="flex justify-between bg-teal-500 p-6">
        <div className="flex items-center justify-between flex-shrink-0 text-white ">
          <div>
            <span className="font-semibold text-xl tracking-tight">
              <Link to="/">Spectrum</Link>
            </span>
          </div>
        </div>
        <div className="bg-gray-200 cursor-pointer hover:bg-teal-800 text-white py-1 font-bold border-b-4 border-yellow-200 hover:border-b-500 rounded outline-none focus:outline-none">
          {isAuthenticated && user ? (
            <p onClick={logout} className="px-6 text-teal-500">logout</p>
          ) : (
            <a
              href={`${unsplashAuthApi}/authorize?client_id=${client_Id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}
              className="px-6 text-teal-500"
            >
              Login
            </a>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading,
  user: auth.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: (() => dispatch(logout()))
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
