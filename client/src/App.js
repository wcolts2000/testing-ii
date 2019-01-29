import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hello World</div>
        <Dashboard />
        <Display />
      </div>
    );
  }
}

export default App;
