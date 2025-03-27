import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Using spread operator with arrays
const fastestCars = ["Bugatti Veyron", "Devel Sixteen", "Hennessey Venom F5", "McLaren Speedtail"];
const cars = ["Maybach Landaulet", "Pagani Zonda C12 F", "Lamborghini Reventon", ...fastestCars ];
console.log(cars);

// Using spread operator with objects

const fullName = {
    firstName: "Avadhut",
    lastName: "Noola"
};

// if you directly use object inside another object
// It will be nested object instead use the spread operator like this:
const user = {
    ...fullName,
    id: 1,
    email: "avadhutnoola@gmail.com"
};

console.log(user);