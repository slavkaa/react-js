import React, {useState} from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter ?? 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({counter: this.state.counter + 1})
  }

  decrement() {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter;