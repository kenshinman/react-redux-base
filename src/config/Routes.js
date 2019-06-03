import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageLoader } from "../components/Loaders";

// create Loadable pages
const Home = lazy(() => import("../pages/home/Home"));

const Routes = () => (
  <Router>
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
