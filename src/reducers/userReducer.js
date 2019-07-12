import { types } from "../actions/userActions";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      if (action.payload === null) {
        return null;
      } else {
        return {
          ...state,
          ...action.payload
        };
      }
    default:
      return state;
  }
};

export default userReducer;