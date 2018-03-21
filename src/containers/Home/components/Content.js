import React, { Component } from 'react';

export default class Content extends Component {
  state = {
    click: 0,
  }
  clickButton = () => {
    this.setState({ click: this.state.click + 1 });
  }
  render() {
    const { click } = this.state;
    // Spread Attributes
    const a = { test: 10 };
    const b = { ...a, qq: 11 };
    // async await
    const q = async () => { await fetch('www.google.com'); return true; };
    // webpack define plugin
    const mode = ENV === 'production' ? 'production mode!' : 'development mode!';
    return (
      <div className="content">
        <h1>Hello, We are ReactMaker!{click}</h1>
        <h2>This is Content Component! {mode}</h2>
        <button onClick={this.clickButton}>click</button>
      </div>
    );
  }
}
