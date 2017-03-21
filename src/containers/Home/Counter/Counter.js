import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'components/';
import { counterActions } from 'redux_flow/actions/';
import Show from '../components/Show';

@connect(
  state => ({
    counter: state.counter,
  }), {
    ...counterActions,
  }
)
export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.shape({}),
    increment: PropTypes.func,
    decrement: PropTypes.func,
    delayIncrement: PropTypes.func,
    callApi: PropTypes.func,
  }

  render() {
    const { counter, increment, decrement, delayIncrement, callApi } = this.props;

    return (
      <div>
        <Show
          num={counter.num}
        />
        <Button color="success" onClick={() => increment(1)}>+1</Button>
        <Button color="success" onClick={() => decrement(1)}>-1</Button>
        <Button color="danger" onClick={() => delayIncrement(5)}>delay +5</Button>
        <Button color="warning" onClick={() => callApi()}>call api</Button>
      </div>
    );
  }
}
