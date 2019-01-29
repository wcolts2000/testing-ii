// import React, { Component } from "react";

// export default class Display extends Component {
//   render() {
//     const { balls, strikes, fouls } = this.props.currentState;
//     return (
//       <div>
//         <h1 data-testid="display">Display</h1>
//         <ul>
//           <li>Balls: {balls}</li>
//           <li>Strikes: {strikes}</li>
//           <li>Fouls: {fouls}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// import React from "react";

// function Display(props) {
//   const { balls, strikes, fouls } = props.currentState;
//   return (
//     <div>
//       <h1 data-testid="display">Display</h1>
//       <ul>
//         <li>Balls: {balls}</li>
//         <li>Strikes: {strikes}</li>
//         <li>Fouls: {fouls}</li>
//       </ul>
//     </div>
//   );
// }

// export default Display;
import React from "react";

function Display(props) {
  const {
    currentState: { balls, strikes, fouls }
  } = props;

  return (
    <div>
      <h1 data-testid="display">Display</h1>
      <ul>
        <li>Balls: {balls}</li>
        <li>Strikes: {strikes}</li>
        <li>Fouls: {fouls}</li>
      </ul>
    </div>
  );
}

export default Display;
