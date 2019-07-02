import React, { Component } from 'react';

import LoadingSpinner from './LoadingSpinner';

import Books from '../components/Books';
import Reports from '../components/Reports';

class LoadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const isloading = this.state.isLoading;

    switch (this.props.name) {
      case 'Books':
        return isloading ? <LoadingSpinner /> : <Books />;
      case 'Reports':
        return isloading ? <LoadingSpinner /> : <Reports />;
      default:
        return '';
    }
  }
}

export default LoadComponent;
