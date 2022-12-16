import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  
  const nameInput = useRef('')
  const [data,setData] = useState([])  
  const [req, setReq] = useState('posts')

  useEffect(() => {
    const myAbortController = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/${req}`)
    .then(response => response.json())
   .then(json => setData(json))
   return () => myAbortController.abort()
  },[req])

  return (
    <div className="App">
      <div>      <button onClick={() => setReq('posts')}>Posts</button>
      {" "}
      <button onClick={() => setReq('users')}>Users</button> 
      {" "}
      <button onClick={() => setReq('comments')}>Comments</button>   
</div>
<div><input type="text" ref={nameInput}/>
<button onClick={() => {console.log(nameInput.current.value); nameInput.current.value = " "}}>add name</button>
</div>
<div>
  {data.map((d, userId) => {
    return <pre>{JSON.stringify(d)}</pre>
  })}
</div>
    </div>
  )
}

export default App
