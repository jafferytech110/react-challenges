import './App.css'
// use Selector hook to fetch data from globalized redux state
import { useSelector } from 'react-redux'
// action dispatching hook
import { useDispatch } from 'react-redux'
import { decrement, increment } from './state-manager/actions'

// // for store
// import { createStore } from 'redux'

// // actions
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // reducers
// const counter = (initialState = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return initialState + 1
//     case "DECREMENT":
//       return initialState - 1
//     default:
//       return initialState
//   }
// }

// // store -> globalized state
// // const store = createStore(rootReducer)
// const store = createStore(counter)

// // dispatch
// store.dispatch(increment())

function App() {

  const counter = useSelector(state => state.counter)
  const user = useSelector(state => state.user)

  // usage of useDispatch, creating dispatch object
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p></p>
        <p>{counter}</p>
        <p></p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default App
