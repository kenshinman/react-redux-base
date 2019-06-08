import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "./Header";

class PublicRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return (
            <ErrorBoundary>
              <Header />
              {/* <SideNav /> */}
              <main id="main">
                <Component {...props} />
              </main>
            </ErrorBoundary>
          );
        }}
      />
    );
  }
}

const mapSateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapSateToProps,
  {}
)(PublicRoute);
