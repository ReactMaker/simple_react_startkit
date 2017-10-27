import React, { Component } from 'react';
import TodoItems from './TodoItems.js';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      item: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
   handleAdd() {
    const itemArray = this.state.items;
    itemArray.push(
      {
        text: this.state.text,
      }
    );
    this.setState({
    item: itemArray
    });
    this.setState({text: ""});
    console.log(this.state.items);
  }
  render() {
    return (
      <div className="content">
        <div className="todoBody">
          <div className="todoListMain">
            <div className="todoHeader">
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <button onClick={this.handleAdd}> add </button>
              <TodoItems entries={this.state.item}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
