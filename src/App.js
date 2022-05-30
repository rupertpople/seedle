// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Location from './components/location';
import Post from './components/post';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to Seedle!</h2>
      <Post />
    </div>
  );
};

export default App;
