import { takeEvery, put, call} from "redux-saga/effects";
import { PHOTOS_SEARCH } from "../../constants";
import { setSearchedPhotos, setSearchedError } from "../../actions/photos";
import { fetchSearchPhotos } from "../../../api/photo";


export function* handlePhotoSearch({searchTerm}) {
  try {
    const photos = yield call(fetchSearchPhotos, searchTerm);
    yield put(setSearchedPhotos(photos));
  } catch (error) {
    yield put(setSearchedError(error.toString()));
  }
}
export default function* watchPhotoSearch() {
  yield takeEvery(PHOTOS_SEARCH, handlePhotoSearch);
}
