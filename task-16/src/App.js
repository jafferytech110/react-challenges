import { useState } from 'react';
import './App.css';
import minionImg from './images/minion.jpg'

function App() {

  const [night, setNight] = useState(true)
  return (
    <>
      <header className={night ? 'dark' : null}>
        <h1>Minion Khan</h1>
        <button onClick={()=>{setNight(!night)}}>{night ? 'day' : 'night'}</button>
      </header>
      <main className={night ? 'dark' : null}>
        <div>
        <h2>
          Skills
        </h2>
        <ul>
          <li>Jack of all trades</li>
          <li>Master of none</li>
        </ul>
        </div>
        <div className='minion-image'>
          <img src={minionImg} alt='minion' />
        </div>
      </main>
    </>
  );
}

export default App;
