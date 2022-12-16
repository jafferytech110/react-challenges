import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// for store
import { createStore } from 'redux'
import allReducers from './state-manager/reducers'
import {Provider} from 'react-redux'

// store -> globalized state
// const store = createStore(rootReducer)
const myStore = createStore(allReducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
