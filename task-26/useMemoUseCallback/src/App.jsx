
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  let someBigArray = [1,2,3,4,5,6,7,8,9]
  const [numbers, setNumbers] = useState(someBigArray)

  const total = useMemo(() => numbers.reduce((acc,number) => acc + number, 0),[numbers])

  const [names] = useState(["John", "Paul", "Simon", "Bob"])
  const sortedNames = useMemo(()=>[...names].sort(),[names])

  // useCallback is used when the reference of callback function is changed with each rendering of component

  return (
    <div className="App">
      total is {total} 
      and sorted names are {sortedNames.join(', ')}
    </div>
  )
}

export default App
