import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>+</button>
      {" "}
      <button>Count = {count} </button>
      {" "}
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default App
