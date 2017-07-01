import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
      </div>
    );
  }
}
