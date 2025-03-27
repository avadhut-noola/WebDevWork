import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Using spread operator
const fastestCars = ["Bugatti Veyron", "Devel Sixteen", "Hennessey Venom F5", "McLaren Speedtail"];
const cars = ["Maybach Landaulet", "Pagani Zonda C12 F", "Lamborghini Reventon", ...fastestCars ];
console.log(cars);