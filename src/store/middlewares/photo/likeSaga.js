import { takeEvery, put, call } from "redux-saga/effects";
import { LIKE_PHOTO } from "../../constants";
import { setLike, setLikeError } from "../../actions/photos";
import { doLikePhoto } from "../../../api/photo";

export function* handleLikePhoto({ photo_id, token }) {
  try {
    const { photo } = yield call(doLikePhoto, photo_id, token);
    yield put(setLike(photo));
  } catch (error) {
    yield put(setLikeError(error.toString()));
  }
}

export default function* watchLikePhoto() {
  yield takeEvery(LIKE_PHOTO, handleLikePhoto);
}
