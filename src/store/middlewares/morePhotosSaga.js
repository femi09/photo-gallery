import { takeEvery, put, call, select } from "redux-saga/effects";
import { LOAD_MORE_PHOTOS} from "../constants";
import { setPhotos, setError } from "../actions";
import { fetchMorePhotos } from "../../api";
const getPage = (state) => state.page;
const getSearchTerm = (state) => state.searchTerm;

export function* handleLoadMore() {
  try {
    const page = yield select(getPage);
    const searchTerm = yield select(getSearchTerm);
    const query = searchTerm ==="" ? "random" : searchTerm
    const photos = yield call(fetchMorePhotos, query, page);
    yield put(setPhotos(photos));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchLoadMore() {
  yield takeEvery(LOAD_MORE_PHOTOS, handleLoadMore);
}