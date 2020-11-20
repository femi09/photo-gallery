import { takeEvery, put, call } from "redux-saga/effects";
import { UNLIKE_PHOTO } from "../../constants";
import {
  setUnlike,
  setUnlikeError,
} from "../../actions/write_photos";
import { doUnlikePhoto } from "../../../api/photo";

export function* handleUnlikePhoto({ photo_id, token }) {
    try {
      const { photo } = yield call(doUnlikePhoto, photo_id, token);
      yield put(setUnlike(photo));
    } catch (error) {
      console.log(error.toString());
      yield put(setUnlikeError(error.toString()));
    }
  }
  
  export default function* watchUnlikePhoto() {
    yield takeEvery(UNLIKE_PHOTO, handleUnlikePhoto);
  }
