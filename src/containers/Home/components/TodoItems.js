import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItems extends Component {
    static propTypes = {
        entries: PropTypes.array
    }
    render() {
        const todoEntries = this.props.entries;

        function createTasks(item) {
            return <li key={item.key}>{item.text}</li>;
        }

        const listItems = todoEntries.map(createTasks);

        return (
          <ul className="thelist">
            {listItems}
          </ul>
        );
    }
}
