import './App.css';
import {useState} from 'react'

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState()
  return (
    <>
    <header>
      <h1>Task 8</h1>
      <h2>Addition of two Numbers</h2>
    </header>
    <main>
      <div>
        <h2>Add two numbers</h2>
        <input type="number" value={num1} placeholder="First Number" onChange={e=>setNum1(Number(e.target.value))} />
        <input type="number" value={num2} placeholder="Second Number" onChange={e=>setNum2(Number(e.target.value))} />
        <button onClick={()=> {setResult(num1+num2)}}>Add Numbers</button>
        <h3>{result}</h3>
      </div>
    </main>
    </>
  );
}

export default App;
