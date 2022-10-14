import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  myApi = '8567f5bf6b8b43b799fb55b74d4bb35c'
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={9} country='gb' category='general' />} />
          <Route path="/business" element={<News key="business" pageSize={9} country='gb' category='business' />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={9} country='gb' category='entertainment' />} />
          <Route path="/health" element={<News key="health" pageSize={9} country='gb' category='health' />}/>
          <Route path="/science" element={<News key="science" pageSize={9} country='gb' category='science' />}/>
          <Route path="/sports" element={<News key="sports" pageSize={9} country='gb' category='sports' />} />            
          <Route path="/technology" element={<News key="technology" pageSize={9} country='gb' category='technology' />} />
        </Routes>
      </>
    )
  }
}

export default App