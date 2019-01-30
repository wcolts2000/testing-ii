import React from "react";

function Display(props) {
  const {
    currentState: { balls, strikes, fouls }
  } = props;

  return (
    <div>
      <h1 data-testid="display">Display</h1>
      <ul data-testid="list">
        <li data-testid="balls">Balls: {balls}</li>
        <li data-testid="strikes">Strikes: {strikes}</li>
        <li data-testid="fouls">Fouls: {fouls}</li>
      </ul>
    </div>
  );
}

export default Display;
