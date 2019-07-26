import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shopSagas";
import { userSagas } from "../sagas/userSagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
