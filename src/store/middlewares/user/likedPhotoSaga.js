import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER_LIKED_PHOTOS } from "../../constants";
import { setLikedPhotos, setLikedPhotosFailure } from "../../actions/user";
import { fetchLikedPhotos } from "../../../api/photo";

export function* handleFetchLikedPhotos({ token, username }) {
  try {
    const photos = yield call(fetchLikedPhotos, username, token);
    yield put(setLikedPhotos(photos));
  } catch (error) {
    yield put(setLikedPhotosFailure(error.toString()));
  }
}

export default function* watchFetchLikedPhotos() {
  yield takeEvery(GET_USER_LIKED_PHOTOS, handleFetchLikedPhotos);
}