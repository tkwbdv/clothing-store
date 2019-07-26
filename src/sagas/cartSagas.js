import { takeLatest, put, all, call } from "redux-saga/effects";

import { types as userTypes } from "../actions/userActions";
import { clearCart } from "../actions/cartActions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
