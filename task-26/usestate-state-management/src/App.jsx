import { useState } from 'react'
import './App.css'

function App() {
  // if big calculated value to be used in useState then use useState like this
  // const [bigValue, setBigValue] = useState(()=>{
  //   //some big calculation
  //   return value
  // })
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>+</button>
      {" "}
      <button>Count = {count}</button>
      {" "}
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default App
