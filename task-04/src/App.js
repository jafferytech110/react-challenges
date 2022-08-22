import { useState } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState('')
  return (
    <>
    <header>
      <h1>Task 4</h1>
      <h2>Realtime Data Binding</h2>
    </header>
    <main>
      <input 
      type="text" 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <div>{text}</div>
    </main>
    </>
  );
}

export default App;
