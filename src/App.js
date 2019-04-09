import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
  }

  increase = () => {
    this.setState(prevState => {
      return { cnt: prevState.cnt + 1 };
    });
  };

  handleClick = () => {
    // event handler
    this.increase();
    debugger;
    this.increase();
    debugger;
    this.increase();
  };

  handleAsyncClick() {
    setTimeout(() => {
      // outside event handler
      this.increase();
      debugger;
      this.increase();
      debugger;
      this.increase();
    }, 1000);
  }

  render() {
    console.log("render!!");
    return (
      <div>
        {this.state.cnt}
        <br />
        <button onClick={this.handleClick.bind(this)}>
          Call this.increase 3 times synchronously.
        </button>

        <button onClick={this.handleAsyncClick.bind(this)}>
          Call this.increase 3 times asynchronously using setTimeout.
        </button>
      </div>
    );
  }
}

export default App;
