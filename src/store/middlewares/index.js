import { all } from "redux-saga/effects";
import randomPhotosSaga from "./randomPhotosSaga";
import searchPhotosSaga from "./searchPhotosSaga"
import morePhotosSaga from "./morePhotosSaga"
import clickedTagsSaga from "./clickedTagsSaga"

function* rootSaga(){
    yield all([randomPhotosSaga(), searchPhotosSaga(), morePhotosSaga(), clickedTagsSaga()])
}

export default rootSaga