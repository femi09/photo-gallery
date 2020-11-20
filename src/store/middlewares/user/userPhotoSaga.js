import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER_PHOTOS } from "../../constants";
import { setUserPhotos, setUserPhotoFailure } from "../../actions/user";
import { fetchUserPhotos } from "../../../api/photo";

export function* handleFetchUserPhotos({ token, username }) {
  try {
    const photos = yield call(fetchUserPhotos, username, token);
    yield put(setUserPhotos(photos));
  } catch (error) {
    yield put(setUserPhotoFailure(error.toString()));
  }
}

export default function* watchFetchUserPhotos() {
  yield takeEvery(GET_USER_PHOTOS, handleFetchUserPhotos);
}