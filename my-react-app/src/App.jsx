import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import List from "./list";

function App() {
  const [count, setCount] = useState(0)
  const name = "Avadhut";
  
  const hours = new Date(2019, 1, 1, 10).getHours();

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
    <>
      <div>
        {/* This is how you use the variables with HTML tags with {varname  } */}
        <h1>Hello {name} </h1>
        <h1 class= "heading" style={customStyle}> {greeting} </h1>

        {/* Components can be separated to make the code visually-clean
            Here List is created in a separate file list.jsx; imported at the top*/}
        <List />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
          This is my test react app
        </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Copyright © {new Date().getFullYear()}
      </p>
    </>
  )
}

export default App
