import React, { Component } from "react";

export default class Display extends Component {
  render() {
    const { balls, strikes, fouls } = this.props.currentState;
    return (
      <div>
        <h1>Display</h1>
        <ul>
          <li>Balls: {balls}</li>
          <li>Strikes: {strikes}</li>
          <li>Fouls: {fouls}</li>
        </ul>
      </div>
    );
  }
}
