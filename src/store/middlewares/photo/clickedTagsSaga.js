import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_CLICKED_PHOTOTAGS} from "../../constants";
import { setClickedPhotoTags, setClickedError } from "../../actions/photos";
import { fetchSearchPhotos } from "../../../api/photo";

export function* handlePhotoTagClick({tagname}) {
  try {
    const photos = yield call(fetchSearchPhotos, tagname);
    yield put(setClickedPhotoTags(photos));
  } catch (error) {
    yield put(setClickedError(error.toString()));
  }
}

export default function* watchPhotoTagClick() {
  yield takeEvery(LOAD_CLICKED_PHOTOTAGS, handlePhotoTagClick);
}