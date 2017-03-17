import React, { Component } from 'react';
import { Loc } from 'redux-react-i18n';
import { Button } from 'components';
import './Home.less';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="index">
        <div className="notice">
          <Loc locKey="hello" />
          <p className="test">ASDF</p>
          <Button color="success">Test</Button>
          <span>11154654654645111111</span>
        </div>
      </div>
    );
  }
}
