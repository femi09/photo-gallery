import React, { useEffect, Fragment } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
  getPublicUser,
} from "../../../store/actions/user";
import ProfileTab from "./ProfileTab";
import ProfileTop from "../ProfileTop";
import Photos from "../Photos";
import Likes from "../Likes";
import Collections from "../Collections";

const PublicProfile = ({
  user,
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
  getPublicUser,
  photos,
  isLoading,
}) => {
  const { username } = useParams();
  useEffect(() => {
    getPublicUser(username, localStorage.access_token);
  }, [getPublicUser, username]);
  return (
    <Fragment>
      {user && (
        <div className="container mx-auto">
          <ProfileTop user={user} />
          <ProfileTab username={username} />
          <Switch>
            <Route
              path={`/profile/${username}/photos`}
              render={(props) => (
                <Photos
                  {...props}
                  isLoading={isLoading}
                  photos={photos}
                  getUserPhotos={getUserPhotos}
                  username={username}
                />
              )}
            />
            <Route
              path={`/profile/${username}/likes`}
              render={(props) => (
                <Likes
                  {...props}
                  isLoading={isLoading}
                  photos={photos}
                  getLikedPhotos={getLikedPhotos}
                  username={username}
                />
              )}
            />
            <Route
              path={`/profile/${username}/collections`}
              render={(props) => (
                <Collections
                  {...props}
                  isLoading={isLoading}
                  photos={photos}
                  getUserCollection={getUserCollection}
                  username={username}
                />
              )}
            />
          </Switch>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = ({ auth, images }) => ({
  user: auth.public_user,
  isLoading: images.isLoading,
  photos: images.photos,
});

const mapDispatchToProps = (dispatch) => ({
  getLikedPhotos: (username, token) =>
    dispatch(getLikedPhotos(username, token)),
  getUserCollection: (username, token) =>
    dispatch(getUserCollection(username, token)),
  getUserPhotos: (username, token) => dispatch(getUserPhotos(username, token)),
  getPublicUser: (username, token) =>
    dispatch(getPublicUser(username, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfile);
