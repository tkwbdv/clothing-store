const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      if (!action.userData.id) {
        return action.userData;
      } else {
        return {
          ...state,
          ...action.userData
        };
      }
    default:
      return state;
  }
};

export default userReducer;