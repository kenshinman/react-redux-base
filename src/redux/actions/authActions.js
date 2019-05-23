import {
  IS_LOGGING_IN,
  // DONE_LOGGING_IN,
  SET_USER,
  LOGOUT_USER
} from "../types";

export const loginUser = (email, password) => dispatch => {
  dispatch({ type: IS_LOGGING_IN });
  //login logic here.
  // when done, dispatch({type: DONE_LOGGING_IN})
};

export const setCurrentUser = user => dispatch => {
  dispatch({ type: SET_USER, payload: user });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
};
