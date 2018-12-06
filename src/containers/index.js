import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

export default
@hot(module)
class Main extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Hello, I`m ReactMaker.</h2>
        <p>To get started, edit containers/index.js</p>
      </div>
    );
  }
}
