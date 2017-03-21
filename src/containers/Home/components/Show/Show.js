import React, { Component, PropTypes } from 'react';
import './Show.less';

export default class Show extends Component {
  static propTypes = {
    num: PropTypes.number,
  }

  render() {
    const { num } = this.props;

    return (
      <div>
        <p className="num">{num}</p>
      </div>
    );
  }
}
