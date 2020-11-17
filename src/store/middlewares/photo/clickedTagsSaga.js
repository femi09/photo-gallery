import { takeEvery, put, call, select } from "redux-saga/effects";
import { LOAD_CLICKED_PHOTOTAGS} from "../../constants";
import { setClickedPhotoTags, setClickedError } from "../../actions/photos";
import { fetchSearchPhotos } from "../../../api/photo";
const getPage = ({images}) => images.page;
export function* handlePhotoTagClick({tagname}) {
  try {
    const page = yield select(getPage);
    const photos = yield call(fetchSearchPhotos, tagname, page);
    yield put(setClickedPhotoTags(photos));
  } catch (error) {
    yield put(setClickedError(error.toString()));
  }
}

export default function* watchPhotoTagClick() {
  yield takeEvery(LOAD_CLICKED_PHOTOTAGS, handlePhotoTagClick);
}