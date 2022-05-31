import './App.css';
import PostcodeForm from './components/postcode-form';
import React from 'react'
import Location from './components/location';
import Post from './components/post';
import PlantModel from './model/plantModel';
import PlantAPI from './model/plantAPI';

const plants = new PlantModel(new PlantAPI('lat=51.4890&lon=-0.2122'));

const App = () => {
  return (
    <div className="App">
      <img src="https://i.imgur.com/OkDeTwM.png"width="500px" alt="seedlelogo"></img> 
      {/* <h2>Please enter your postcode:</h2>  */}
      <PostcodeForm />
    </div>
  );
};

export default App;
