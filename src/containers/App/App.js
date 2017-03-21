import React, { Component, PropTypes } from 'react';
import { Footer } from '../../components';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.shape({}),
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
