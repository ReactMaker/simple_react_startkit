import React, { Component } from 'react';
import logo from 'static/images/logo.png';
import github from 'static/images/github.png';
import facebook from 'static/images/facebook.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img alt="logoHeader" src={logo} />
        </div>
        <div className="link">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactMaker">
            <img alt="github" src={github} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/reactmaker">
            <img alt="facebook" src={facebook} />
          </a>
        </div>
      </div>
    );
  }
}
