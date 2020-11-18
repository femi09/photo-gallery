import { takeEvery, put, call } from "redux-saga/effects";
import { DOWNLOAD_PHOTO } from "../../constants";
import { downloadSuccess, downloadError } from "../../actions/write_photos";
import { doPhotoDownload } from "../../../api/photo";

export function* handleDownloadPhoto({ photo_id }) {
  try {
    console.log(photo_id)
    const {url} = yield call(doPhotoDownload, photo_id);
    yield put(downloadSuccess(url));
  } catch (error) {
    yield put(downloadError(error.toString()));
  }
}

export default function* watchDownloadPhoto() {
  yield takeEvery(DOWNLOAD_PHOTO, handleDownloadPhoto);
}
