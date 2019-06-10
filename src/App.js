import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import Routes from "./config/Routes";

if (localStorage.jwt) {
  //set auth token header auth;
  axios.defaults.headers.common[
    "Authorization"
  ] = store.getState().auth.user.token;

  axios.defaults.headers.common["Authorization"] = localStorage.jwt;
  //decode token and get user
  const decoded = jwt_decode(localStorage.jwt);
  //set current user
  //sets persistent session
  if (localStorage.user)
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
