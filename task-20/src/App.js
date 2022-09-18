import { useState } from 'react';
import './App.css';
import Signup from './components/Signup';
import Success from './components/Success'

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }
  return (
  <>
    {isSubmitted ? 'Thank you for submitting the form' : <Signup submitForm={submitForm} />}
  </>
  );
}

export default App;

// https://www.youtube.com/watch?v=KGFG-yQD7Dw&ab_channel=BrianDesign
