import './App.css';
import PostcodeForm from './components/postcode-form';
import React from 'react'
import Post from './components/post';
import PlantModel from './model/plantModel';
import PlantAPI from './model/plantAPI';

const plants = new PlantModel(new PlantAPI('lat=51.4890&lon=-0.2122'));

const App = () => {
  return (
    <div className="App">
      <div className="img"><img src="https://i.imgur.com/CghEz2N.png" alt="seedleback"></img></div>
      <PostcodeForm />
      <Post />
    </div>
  );
};

export default App;
