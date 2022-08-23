import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  return (
    <>
    <header>
      <h1>Task 5</h1>
      <h2>Diabling and Enabling of Button</h2>
    </header>
    <main>
      <div>
        <input type="text" 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
        />
        <br />
        <button disabled={!text}>Submit</button>
      </div>
    </main>
    </>
  );
}

export default App;
