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
import userSaga from "./auth/userSaga";



function* rootSaga() {
  yield all([
    randomPhotosSaga(),
    searchPhotosSaga(),
    morePhotosSaga(),
    clickedTagsSaga(),
    authSaga(),
    userSaga(),
    likeSaga(),
    unlikeSaga(),
    downloadSaga(),
    updateSaga()
  ]);
}

export default rootSaga;
