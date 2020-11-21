import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getUser } from "../../store/actions/user";
import {
  unsplashAuthApi,
  client_Id,
  redirect_uri,
  response_type,
  scope,
} from "../../config.json";
import Dropdown from "./Dropdown";

const NavBar = ({ isAuthenticated, logout, getUser, user, isLoading }) => {

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
        <div className="cursor-pointer text-white py-1 font-bold hover:border-b-500 rounded outline-none focus:outline-none">
          {!isLoading && isAuthenticated && user ? (
            <div className="px-4 sm:px-6">
              <Dropdown user={user} logout={logout} />
            </div>
          ) : !isLoading && !isAuthenticated && !user ? (
            <a
              href={`${unsplashAuthApi}/authorize?client_id=${client_Id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}
              className="px-6"
            >
              Login
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading,
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUser: (token) => dispatch(getUser(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
