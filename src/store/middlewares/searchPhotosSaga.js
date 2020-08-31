import { takeEvery, put, call, select } from "redux-saga/effects";
import { PHOTOS_SEARCH } from "../constants";
import { setSearchedPhotos, setError } from "../actions";
import { fetchSearchPhotos } from "../../api";

const getSearchTerm = (state) => state.searchTerm;

export function* handlePhotoSearch() {
  try {
    const searchTerm = yield select(getSearchTerm);
    const photos = yield call(fetchSearchPhotos, searchTerm);
    console.log(photos);
    yield put(setSearchedPhotos(photos));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchPhotoSearch() {
  yield takeEvery(PHOTOS_SEARCH, handlePhotoSearch);
}
