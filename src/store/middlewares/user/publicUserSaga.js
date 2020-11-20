import { takeEvery, put, call } from "redux-saga/effects";
import { GET_PUBLIC_USER } from "../../constants";
import { fetchPublicUser } from "../../../api/auth";
import { setPublicUser, setPublicUserFailure } from "../../actions/user";

export function* handleFetchPublicUser({ username, token }) {
  try {
    const user = yield call(fetchPublicUser, username, token);
    yield put(setPublicUser(user));
    console.log(user)
  } catch (error) {
    yield put(setPublicUserFailure(error.toString()));
  }
}

export default function* watchFetchPublicUser() {
  yield takeEvery(GET_PUBLIC_USER, handleFetchPublicUser);
}