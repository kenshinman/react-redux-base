import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from './Header';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated) {
          return (
            <ErrorBoundary>
              <Header />
              {/* <SideNav /> */}
              <main className="container" id="private-route-layout">
                <Component {...props} />
              </main>
            </ErrorBoundary>
          );
        } else {
          //enable this line below to make route protected
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: propTypes.shape({
    isAuthenticated: propTypes.bool.isRequired,
  }),
  component: propTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(PrivateRoute);
