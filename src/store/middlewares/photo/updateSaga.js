import { takeEvery, call } from "redux-saga/effects";
import { UPDATE_PHOTO } from "../../constants";
import { photoUpdate } from "../../../api/photo";

export function* handlePhotoUpdate({ photo_id, token }) {
  try {
    const { photo } = yield call(photoUpdate, photo_id, token);
    console.log(photo)
  } catch (error) {
    console.log(error.toString())
  }
}

export default function* watchPhotoUpdate() {
  yield takeEvery(UPDATE_PHOTO, handlePhotoUpdate);
}