export const types = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

// SET_CURRENT_USER

export const setCurrentUser = userData => ({
  type: types.SET_CURRENT_USER,
  payload: userData
});
