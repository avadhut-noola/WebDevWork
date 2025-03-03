import React from "react";

function Heading () {
const hours = new Date().getHours();

  let greeting = "";
  const customStyle = {
    color: "red",
  };

  if(hours < 12) {
    greeting = "Good Morning!";
    customStyle.color = "Aquamarine";
  } else if (hours > 12 && hours < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "DarkOrange";
  } else {
    greeting = "Good Night!";
    customStyle.color = "powderblue";
  }
  return (
        <h1 class= "heading" style={customStyle}> {greeting} </h1> 
    );
}

export default Heading;