import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

export default
@hot(module)
class Main extends Component {
  // this is test function, please remove it before develop.
  async componentDidMount() {
    const a = await Promise.resolve({ react: 1, maker: 2 });
    const b = { ...a };
    console.log(b);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Hello, I`m ReactMaker.</h2>
        <p>To get started, edit containers/index.js</p>
      </div>
    );
  }
}
