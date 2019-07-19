import React, { Component } from 'react';
import propTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h3>Something went wrong. Unable to render this part.</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ]).isRequired,
};

export default ErrorBoundary;
