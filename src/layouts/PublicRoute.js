import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "./Header";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return (
        <ErrorBoundary>
          <Header />
          {/* <SideNav /> */}
          <main className='container' id="public-route-layout">
            <Component {...props} />
          </main>
        </ErrorBoundary>
      );
    }}
    />
  );
};

export default PublicRoute;
