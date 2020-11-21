import React, { Fragment } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
} from "../../../store/actions/user";
import ProfileTab from "./ProfileTab";
import ProfileTop from "../ProfileTop";
import Photos from "../Photos";
import Likes from "../Likes";
import Collections from "../Collections";

const MyProfile = ({
  user,
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
  photos,
  isLoading,
  collections,
}) => {
  const { username } = useParams();
  return (
    <Fragment>
      {user &&
        <div className="sm:container sm:mx-auto py-8">
          <ProfileTop user={user} />
          <ProfileTab username={username} />
          <Switch>
            <Route
              path={`/${username}/photos`}
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
              path={`/${username}/likes`}
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
              path={`/${username}/collections`}
              render={(props) => (
                <Collections
                  {...props}
                  isLoading={isLoading}
                  collections={collections}
                  getUserCollection={getUserCollection}
                  username={username}
                />
              )}
            />
          </Switch>
        </div>
      }
    </Fragment>
  );
};
const mapStateToProps = ({ auth, images }) => ({
  user: auth.user,
  isLoading: images.isLoading,
  photos: images.photos,
  collections: images.collections,
});

const mapDispatchToProps = (dispatch) => ({
  getLikedPhotos: (username, token) =>
    dispatch(getLikedPhotos(username, token)),
  getUserCollection: (username, token) =>
    dispatch(getUserCollection(username, token)),
  getUserPhotos: (username, token) => dispatch(getUserPhotos(username, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
