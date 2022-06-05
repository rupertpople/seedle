import './App.css';
import React from 'react'
import Location from './components/location';
import Post from './components/post';


const App = () => {
  return (
    <div className="App">
      <div className="seedlelogo"><img src="https://i.imgur.com/FP5jGip.png" width="450px" alt="logo"></img></div>
      <Location index={1}/> 
    </div>
  );
};

export default App;
