import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClickIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClickDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickIncrement}>
          +
        </button>
        <button onClick={this.handleClickDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
