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
          <main className='container' id="auth-route-layout">
            <ErrorBoundary>
              <Component {...props} />
            </ErrorBoundary>
          </main>
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
