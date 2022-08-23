import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json()
    setData(user)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <header>
      <h1>Task 10</h1>
      <h2>Fetch Api and show in Browser</h2>
    </header>
    <main>
      <div>
        <p>API Link: https://jsonplaceholder.typicode.com/users/1</p>
        
              <div>Name: {data.name}</div>
              <div>username: {data.username}</div>
              <div>email: {data.email}</div>
              <div>phone: {data.phone}</div>
        
      </div>
    </main>
    </>
  );
}

export default App;
