import './App.css';
import React from 'react'
import Location from './components/location';
import BackToTopButton from './components/back-to-top-button';


const App = () => {
  return (
    <div className="App">
      <div className="seedlelogo"><img src="https://i.imgur.com/FP5jGip.png" width="450px" alt="logo"></img></div>
      <Location index={1}/> 
    </div>
  );
};

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

export default App;
