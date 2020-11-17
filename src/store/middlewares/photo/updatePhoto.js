import { takeEvery, put, call } from "redux-saga/effects";
import { UPDATE_PHOTO } from "../../constants";
import { updatePhoto } from "../../actions/photos";
import { updatePhoto } from "../../../api/photo";

export function* handlePhotoUpdate({ photo_id, token }) {
  try {
    const { photo } = yield call(updatePhoto, photo_id, token);
    yield put(setLike(photo));
  } catch (error) {
    yield put(setLikeError(error.toString()));
  }
}

export default function* watchPhotoUpdate() {
  yield takeEvery(LIKE_PHOTO, handlePhotoUpdate);
}