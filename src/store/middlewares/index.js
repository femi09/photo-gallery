import { all } from "redux-saga/effects";
import randomPhotosSaga from "./photo/randomPhotosSaga";
import searchPhotosSaga from "./photo/searchPhotosSaga";
import morePhotosSaga from "./photo/morePhotosSaga";
import clickedTagsSaga from "./photo/clickedTagsSaga";
import likeSaga from "./photo/likeSaga";
import updateSaga from "./photo/updateSaga";
import downloadSaga from "./photo/downloadSaga";
import unlikeSaga from "./photo/unlikeSaga";
import authSaga from "./auth/authSaga";
import userSaga from "./user/userSaga";
import publicUserSaga from "./user/publicUserSaga";
import likedPhotoSaga from "./user/likedPhotoSaga";
import userPhotoSaga from "./user/userPhotoSaga";
import userCollectionSaga from "./user/userCollectionSaga";



function* rootSaga() {
  yield all([
    randomPhotosSaga(),
    searchPhotosSaga(),
    morePhotosSaga(),
    clickedTagsSaga(),
    authSaga(),
    userSaga(),
    publicUserSaga(),
    likeSaga(),
    unlikeSaga(),
    downloadSaga(),
    updateSaga(),
    likedPhotoSaga(),
    userPhotoSaga(),
    userCollectionSaga()
  ]);
}

export default rootSaga;
