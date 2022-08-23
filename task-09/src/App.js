import './App.css';
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <header>
      <h1>Task 9</h1>
      <h2>Increment and Decrement of Counter</h2>
    </header>
    <main>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={()=> setCounter(prev=>prev + 1)}>Increment</button>
        <button onClick={()=> setCounter(prev=>prev - 1)}>Decrement</button>
      </div>
    </main>
    </>
  );
}

export default App;
