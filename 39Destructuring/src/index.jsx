import React from "react";
import ReactDOM from "react-dom";
import cars from "./cars";

// Destructuring of arrays:
const [honda, tesla] = cars;

// Destructuring of objects:
const { speedStats: { hondaTopSpeed } } = honda;
const { speedStats: { teslaTopSpeed } } = tesla;

//Destructuring arrays which are stored in JSON object:
const { coloursByPopularity: [hondaTopColor] } = honda;
const { coloursByPopularity: [teslaTopColor] } = tesla;

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColor}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColor}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);