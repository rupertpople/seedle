import './App.css';
import React from 'react'
import Location from './components/location';
import BackToTopButton from './components/back-to-top-button';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <div className="seedlelogo"><img src="https://i.imgur.com/FP5jGip.png" width="450px" alt="logo"></img></div>
      </div>
      <Location index={1}/> 
      <Footer/>
    </div>
  );
};

export default App;
