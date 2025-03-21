import { useState } from 'react'
import './App.css'

// Read this docs on Hooks: https://react.dev/reference/react-dom/hooks
function App() {
  // this is the useState hook
  // 1. destructuring array here: first count is the variable to access the state
  // 2. second is the method to update state to behave dynamically in app.
  // 3. This helps in 
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count +1);
  }
  
  function decrease() {
    setCount(count -1);
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </>
  )
}

export default App
