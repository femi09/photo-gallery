import { takeEvery, put, call } from "redux-saga/effects";
import { fetchAccessToken } from "../../../api/auth";
import { GET_ACCESS_TOKEN } from "../../constants";
import { getUser } from "../../actions/user";
import { storeAccessToken, setAccessTokenError } from "../../actions/auth";

export function* handleGetAccessToken({
  redirect_uri,
  code,
  grant_type,
  history,
}) {
  try {
    const { access_token } = yield call(
      fetchAccessToken,
      redirect_uri,
      code,
      grant_type
    );

    localStorage.setItem("access_token", access_token);
    yield put(getUser(access_token));
    yield put(storeAccessToken(access_token));
    history.replace("/");
  } catch (error) {
    localStorage.removeItem("access_token");
    yield put(setAccessTokenError(error.toString()));
    history.replace("/");
  }
}

export default function* watchgetAccessToken() {
  yield takeEvery(GET_ACCESS_TOKEN, handleGetAccessToken);
}
