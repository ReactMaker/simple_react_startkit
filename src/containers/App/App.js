import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Footer } from 'components';

export default class App extends Component {
  static propTypes = {
    actions: PropTypes.shape({}),
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
