import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [light, setLight] = useState(false)
  return (
    <>
      <div className='header-line'></div>
      <div className={light ? 'light-mode' : 'dark-mode'}>
        <Header light={light} setLight={setLight}/>
        <Main />
      </div>
    </>
  );
}

export default App;
