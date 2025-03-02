import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";

function App() {
  const [count, setCount] = useState(0)
  const name = "Avadhut";
  return (
    <>
      <div>
        {/* This is how you use the variables with HTML tags with {varname  } */}
        <h1>Hello {name} </h1>
        <ul>
          <li>Development is easy</li>
          <li>With React Integration</li>
          <li>It increases the overall pace of development</li>
        </ul>
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
