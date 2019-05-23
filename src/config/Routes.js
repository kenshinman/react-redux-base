import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingComponent from "../components/LoadingComponent";

// create Loadable pages
const Home = Loadable({
  loader: () => import("../pages/home/Home"),
  loading: LoadingComponent
});

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default Routes;
