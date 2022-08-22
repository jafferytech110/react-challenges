import { useState } from 'react';
import './App.css';

function App() {

  const [box, setBox] = useState(true)
  const [button, setButton] = useState('Hide')

  return (
    <>
    <header>
      <h1>Task 3</h1>
      <h2>Show/Hide Box</h2>
    </header>
    <main>
       <div>
        <div><button onClick={()=>{
            setBox(prev => !prev)
            if(button === 'Hide') {
              setButton('Show')
            } else {
              setButton('Hide')
            }
          }}>
            {button}
          </button></div>
          
          {box && <div className='box'>I am Box</div>}
        </div>  
    </main>
    </>
  );
}

export default App;
