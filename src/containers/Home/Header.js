import React, { Component } from 'react';
import logo from './logo7.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img alt="logoHeader" src={logo} />
      </div>
    );
  }
}
