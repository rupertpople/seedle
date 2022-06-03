// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Location from './components/location';
import Post from './components/post';
//import PlantModel from './model/plantModel';
//import PlantAPI from './model/plantAPI';

//const plants = new PlantModel(new PlantAPI('lat=51.4890&lon=-0.2122'));

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to Seedle!</h2>
      <h3>Your Online Local Species Explorer </h3>
      <Post />
      <Location index={1}/> 
    </div>
  );
};

export default App;
