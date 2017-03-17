import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Loc } from 'redux-react-i18n';
import { push } from 'react-router-redux';

import './Home.less';
import { Button } from 'components';
import { counterActions } from '../../redux/actions';

@connect(
  (state) => ({
    counter: state.counter,
  }), {
    pushState: push, ...counterActions,
  }
)
export default class Home extends Component {
  static propTypes = {
    pushState: PropTypes.func,
    increment: PropTypes.func,
    decrement: PropTypes.func,
  }

  constructor() {
    super();
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div className="index">
        <div className="notice">
          <Loc locKey="hello" />
          <p className="test">ASDF</p>
          <p>{counter.num}</p>
          <Button color="success" onClick={() => increment(1)}>+1</Button>
          <Button color="success" onClick={() => decrement(1)}>-1</Button>
        </div>
      </div>
    );
  }
}
