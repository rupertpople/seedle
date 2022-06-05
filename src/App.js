import './App.css';
import React from 'react'
import Location from './components/location';
import Post from './components/post';


const App = () => {
  return (
    <div className="App">
      <div className="seedlelogo"><img src="https://i.imgur.com/FP5jGip.png" width="400px" alt="logo"></img></div>
      <Post />
      <Location index={1}/> 
    </div>
  );
};

export default App;
