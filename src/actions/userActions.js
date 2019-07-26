export const types = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE"
};

export const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: types.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: types.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: types.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: types.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: types.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: types.SIGN_UP_FAILURE,
  payload: error
});
