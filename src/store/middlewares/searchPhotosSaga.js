import { takeEvery, put, call} from "redux-saga/effects";
import { PHOTOS_SEARCH } from "../constants";
import { setSearchedPhotos, setSearchedError } from "../actions";
import { fetchSearchPhotos } from "../../api";


export function* handlePhotoSearch({searchTerm}) {
  try {
    console.log(searchTerm)
    const photos = yield call(fetchSearchPhotos, searchTerm);
    yield put(setSearchedPhotos(photos));
  } catch (error) {
    yield put(setSearchedError(error.toString()));
  }
}
export default function* watchPhotoSearch() {
  yield takeEvery(PHOTOS_SEARCH, handlePhotoSearch);
}
