import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.balls === 3 && prevState.balls !== this.state.balls) {
      this.setState({ balls: 0, strikes: 0, fouls: 0 });
    }
    if (prevState.strikes === 2 && prevState.strikes !== this.state.strikes) {
      this.setState({ balls: 0, strikes: 0, fouls: 0 });
    }
  };

  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0
    });
  };

  handleBoardChange = name => {
    let prevState = this.state[name];
    console.log(prevState);

    this.setState({ [name]: prevState + 1 });
  };

  render() {
    return (
      <div className="App">
        <div>Hello World</div>
        <Dashboard
          handleBoardChange={this.handleBoardChange}
          handleHit={this.handleHit}
        />
        <Display currentState={this.state} />
      </div>
    );
  }
}

export default App;
