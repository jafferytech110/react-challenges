import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const callApi = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      if(data) {
        setLoading(false)
        console.log(data)
      }
    }
    callApi()
  },[])

  return (
    <div className="App">
      <header>
        <h1>Loading Animation</h1>
      </header>
      <main>
        {loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
      </main>
    </div>
  );
}

export default App;
