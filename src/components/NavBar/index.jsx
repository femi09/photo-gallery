import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getUser } from "../../store/actions/user";
import {
  unsplashAuthApi,
  redirect_uri,
  response_type,
  scope,
} from "../../config.json";
import Dropdown from "./Dropdown";

const NavBar = ({ logout,  isLoading }) => {
    let current_user = JSON.parse(localStorage.getItem("current_user"));
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
          {!isLoading && current_user ? (
            <div className="px-4 sm:px-6">
              <Dropdown user={current_user} logout={logout} />
            </div>
          ) : !isLoading && !current_user ? (
            <a
              href={`${unsplashAuthApi}/authorize?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}
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
  isLoading: auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUser: (token) => dispatch(getUser(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
