import './App.css';
import React from 'react'
import Location from './components/location';
import Post from './components/post';


const App = () => {
  return (
    <div className="App">
      <div className="heading"><img src="https://i.imgur.com/pbbU5dm.png" width="400px" alt="seedlelogo"></img>
      <h3>Your Online Local Species Explorer </h3>
      </div>
      <Post />
      <Location index={1}/> 
    </div>
  );
};

export default App;
