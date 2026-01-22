import React from 'react';
import { STRINGS } from '../constants';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h2 className="error-boundary-title">{STRINGS.error.boundaryTitle}</h2>
            <p className="error-boundary-message">{STRINGS.error.boundaryMessage}</p>
            <button className="error-boundary-button" onClick={this.handleRetry}>
              {STRINGS.error.retry}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
