import { takeEvery, put, call } from "redux-saga/effects";
import { GET_PROFILE } from "../../constants";
import { fetchProfile } from "../../../api/auth";
import { setProfile, setProfileFailure } from "../../actions/profile";

export function* handleFetchProfile({ username, token }) {
  try {
    const profile = yield call(fetchProfile, username, token);
    yield put(setProfile(profile));
  } catch (error) {
    yield put(setProfileFailure(error.toString()));
  }
}

export default function* watchFetchProfile() {
  yield takeEvery(GET_PROFILE, handleFetchProfile);
}