import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleBoardChange, handleHit } = this.props;
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => handleBoardChange("balls")}>Balls</button>
        <button onClick={() => handleBoardChange("strikes")}>Strikes</button>
        <button onClick={() => handleBoardChange("fouls")}>Fouls</button>
        <button onClick={() => handleHit()}>hit</button>
      </div>
    );
  }
}
