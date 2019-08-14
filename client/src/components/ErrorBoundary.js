import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "../styles/components/_ErrorBoundary";

class ErrorBoudary extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    // handle the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="/images/error-image.png" />
          <ErrorImageText>Sorry, this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoudary;
