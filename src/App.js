// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import BirdModel from './model/birdModel';
import BirdAPI from './model/birdAPI';

const birds = new BirdModel(new BirdAPI('lat=51.4890&lon=-0.2122'));

function App() {
  return (
    <div className="App">
      {console.log('10')}
      {console.log (birds.getBirds())}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to Seedle! Does it work?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  
    </div>
  );
}

export default App;
