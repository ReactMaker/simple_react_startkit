import React, { Component, PropTypes } from 'react';
import BsButton from 'reactstrap/lib/Button';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.shape({}),
    color: PropTypes.string,
  }

  render() {
    const { children, color, ...props } = this.props;

    return (
      <BsButton
        color={color || 'secondary'}
        {...props}
      >
        {children}
      </BsButton>
    );
  }
}
