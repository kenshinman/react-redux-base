import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "./Header";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    //this.props.setActiveLink(this.props.path);
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (auth.isAuthenticated) {
            return (
              <ErrorBoundary>
                <Header />
                {/* <SideNav /> */}
                <main id="main">
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
  }
}

const mapSateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapSateToProps,
  {}
)(PrivateRoute);
