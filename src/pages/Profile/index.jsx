import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../store/actions/user";
import ProfileTab from "./ProfileTab";
import ProfileTop from "./ProfileTop";
import Photos from "./Photos";
import Likes from "./Likes";
import Collections from "./Collections";

const Profile = ({ user }) => {
  return (
    <Fragment>
      {user && (
        <div className="container mx-auto">
          <ProfileTop user={user} />
          <ProfileTab user={user} />
          <Switch>
            <Route
              path={`/profile/${user.username}/photos`}
              component={Photos}
            />
            <Route path={`/profile/${user.username}/likes`} component={Likes} />
            <Route
              path={`/profile/${user.username}/collections`}
              component={Collections}
            />
          </Switch>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isLoading: auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (token) => dispatch(getUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
