import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    const { handleBoardChange, handleHit } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        <button data-testid="balls" onClick={() => handleBoardChange("balls")}>
          Balls
        </button>
        <button
          data-testid="strikes"
          onClick={() => handleBoardChange("strikes")}
        >
          Strikes
        </button>
        <button data-testid="fouls" onClick={() => handleBoardChange("fouls")}>
          Fouls
        </button>
        <button data-testid="hit" onClick={() => handleHit()}>
          hit
        </button>
      </div>
    );
  }
}
