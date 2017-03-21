import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Loc } from 'redux-react-i18n';
import { push } from 'react-router-redux';
import './Home.less';

import Counter from './Counter';

@connect(
  () => ({}),
  { pushState: push }
)
export default class Home extends Component {
  static propTypes = {
    pushState: PropTypes.func,
  }

  render() {
    return (
      <div className="index">
        <div className="notice">
          <Loc locKey="hello" />
          <p className="test">ASe=aeeff44</p>
          <Counter />
        </div>
      </div>
    );
  }
}
