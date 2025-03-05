import React from "react";

// By using props we can populate data to React components
function Card(props) {1
  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image}></img>
        <h2>{props.tel}</h2>
        <h2>{props.email}</h2>
      </div>
    </>
  )
}

export default Card
