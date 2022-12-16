import { useReducer } from 'react'
import './App.css'

// let numbers = [12,32,424,12]
// // 0 in the end is the currentValue passed
// numbers.reduce((accumulator, eachNumber) => {
//   return accumulator + eachNumber
// },0)

function App() {
  // useReducer returns a current state, which is passed to it and it also returns dispatch or reducer function
  // in below example, the object which contains names array and empty name are current state 
  // reducer function takes the current state, in this case, it is called appState and action which is usually an object
  const [appState, dispatch] = useReducer((appState, action) => {
    switch(action.type) {
      case "SET_NAME":
        return {...appState, name: action.payload}
      case "ADD_NAME":
        return {...appState, names: [...appState.names, appState.name], name: ""}
    }
  },{
    names:[],
    name: ""
  })
  return (
    <div className="App">
      <input type="text" 
      value={appState.name} 
      onChange={e => dispatch({type: "SET_NAME", payload: e.target.value})}/>
      <button onClick={() => dispatch({type: "ADD_NAME"})}>add name</button>
      <div>{appState.name}</div>
      <div>{appState.names.map((name) => (
        <p>{name}</p>
      )
      )}</div>
    </div>
  )
}

export default App
