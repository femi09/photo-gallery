import { takeEvery, put, call, select } from "redux-saga/effects";
import { setPhotos, setError } from "../../actions/photos";
import { LOAD_PHOTOS } from "../../constants";
import { fetchRandomPhotos } from "../../../api/photo";

//worker Saga
const getPage = (state) => state.page;
export function* handlePhotoFetch() {
  try {
    const page = yield select(getPage);
    const per_page = 5;
    const photos = yield call(fetchRandomPhotos, page, per_page);
    yield put(setPhotos(photos))
  } catch (error) {
    yield put(setError(error.toString()))
  }
}

//watcher Saga

export default function* watchPhotosFetch() {
  yield takeEvery(LOAD_PHOTOS, handlePhotoFetch);
}
