import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='container'>
          <h3>Something went wrong. Unable to render this part.</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
