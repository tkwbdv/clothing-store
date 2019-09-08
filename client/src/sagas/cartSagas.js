import { takeLatest, put, all, call, select } from "redux-saga/effects";

import { getUserCartRef } from "../firebase/firebase";

import { types as userTypes } from "../actions/userActions";
import { types as cartTypes } from "../actions/cartActions";
import { clearCart, setCartFromFirebase } from "../actions/cartActions";

import { selectCurrentUser } from "../selectors/userSelectors";
import { selectCartItems } from "../selectors/cartSelectors";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(userTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [cartTypes.ADD_ITEM, cartTypes.REMOVE_ITEM, cartTypes.CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange)
  ]);
}
