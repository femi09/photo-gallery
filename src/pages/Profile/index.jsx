import React, { useEffect, Fragment } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
} from "../../store/actions/user";
import ProfileTab from "./ProfileTab";
import ProfileTop from "./ProfileTop";
import Photos from "./Photos";
import Likes from "./Likes";
import Collections from "./Collections";
import ProfileTopSkeleton from "../../components/Skeletons/Profiles/ProfileTopSkeleton";
import { getProfile } from "../../store/actions/profile";

const Profile = ({
  profile,
  getLikedPhotos,
  getUserPhotos,
  getUserCollection,
  getProfile,
  photos,
  collections,
  loading,
  isLoading,
}) => {
  const { username } = useParams();
  useEffect(() => {
    getProfile(username, localStorage.access_token);
    console.log("profile page");
  }, [getProfile, username]);
  return (
    <Fragment>
      {loading && <ProfileTopSkeleton />}
      <div className="container mx-auto py-8">
        {profile && <ProfileTop profile={profile} />}
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
    </Fragment>
  );
};
const mapStateToProps = ({ auth, profile }) => ({
  profile: profile.profile,
  isLoading: profile.isLoading,
  photos: profile.user_photos,
  collections: profile.collections,
  loading: auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getLikedPhotos: (username, token) =>
    dispatch(getLikedPhotos(username, token)),
  getUserCollection: (username, token) =>
    dispatch(getUserCollection(username, token)),
  getUserPhotos: (username, token) => dispatch(getUserPhotos(username, token)),
  getProfile: (username, token) => dispatch(getProfile(username, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
