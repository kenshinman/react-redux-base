import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";

const AuthRoute = ({ component: Component, auth, ...rest}) => {
  return (
    <Route {...rest} render={props => {
      // if user is authenticated, redirect to homepage
      if (auth.isAuthenticated) {
        return <Redirect to="/" />;
      }
      else {
        return (
          <section className="login-layout-section">
            <ErrorBoundary>
              <Component {...props} />
            </ErrorBoundary>
          </section>
        );
      }
    }}
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(AuthRoute);
