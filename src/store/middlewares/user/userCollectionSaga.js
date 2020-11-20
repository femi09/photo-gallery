import { takeEvery, put, call } from "redux-saga/effects";
import { GET_USER_COLLECTION } from "../../constants";
import { setUserCollection, setUserCollectionFailure } from "../../actions/user";
import { fetchUserCollection } from "../../../api/photo";

export function* handleFetchUserCollection({ token, username }) {
  try {
    const collection = yield call(fetchUserCollection, username, token);
    yield put(setUserCollection(collection));
  } catch (error) {
    yield put(setUserCollectionFailure(error.toString()));
  }
}

export default function* watchFetchUserCollection() {
  yield takeEvery(GET_USER_COLLECTION, handleFetchUserCollection);
}