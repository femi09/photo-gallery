import { takeEvery, put, call, select } from "redux-saga/effects";
import { LOAD_MORE_PHOTOS} from "../constants";
import { setLoadMorePhotos, setLoadMoreError } from "../actions";
import { fetchMorePhotos } from "../../api";
const getPage = ({images}) => images.page;
const getSearchTerm = ({images}) => images.searchTerm;
const getTagname =({images}) => images.tagname

export function* handleLoadMore() {
  try {
    const page = yield select(getPage);
    const searchTerm = yield select(getSearchTerm);
    const tagname = yield select(getTagname)
    console.log(tagname)
    const query = searchTerm ? searchTerm : tagname ? tagname : "editorial" 
    console.log(query)
    const photos = yield call(fetchMorePhotos, query, page);
    yield put(setLoadMorePhotos(photos));
  } catch (error) {
    yield put(setLoadMoreError(error.toString()));
  }
}

export default function* watchLoadMore() {
  yield takeEvery(LOAD_MORE_PHOTOS, handleLoadMore);
}