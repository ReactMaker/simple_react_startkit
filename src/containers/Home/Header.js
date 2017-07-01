import React, { Component } from 'react';
import logo from './logo7.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="https://facebook.com/reactmaker">
          <img alt="logoHeader" src={logo} />
        </a>
      </div>
    );
  }
}
