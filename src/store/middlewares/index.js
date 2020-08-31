import { all } from "redux-saga/effects";
import randomPhotosSaga from "./randomPhotosSaga";
import searchPhotosSaga from "./searchPhotosSaga"
import morePhotosSaga from "./morePhotosSaga"

function* rootSaga(){
    yield all([randomPhotosSaga(), searchPhotosSaga(), morePhotosSaga()])
}

export default rootSaga