import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Routes = () => (
  <Router>
    <Route
      exact
      path="/"
      render={() => {
        return (
          <div>
            <h1>Welcome to the Boilerplate</h1>
            <p>
              Still in progress though but auth is set up with redux and thunk
            </p>
          </div>
        );
      }}
    />
    <Route
      exact
      render={() => {
        return (
          <div>
            <h4>404! What are you looking for?</h4>
            <h5>
              Back Home <Link to="/"> {"<<<"} </Link>
            </h5>
          </div>
        );
      }}
    />
  </Router>
);

export default Routes;
