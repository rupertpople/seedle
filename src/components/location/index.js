import React from 'react';
// import './index.css'
import { useState, useEffect } from "react";
import GeocodingAPI from '../../model/geocodingAPI';
import GeocodingModel from '../../model/geocodingModel';
import BirdAPI from '../../hooks/birdAPI';
import PlantAPI from '../../hooks/plantAPI';
import WikiDescriptionAPI from '../../hooks/wikipediaDescriptionAPI';
import WikiImageAPI from '../../hooks/wikipediaImageAPI'

const Location = () => {
  const [ postcode, setPostcode ] = useState("");

  // const [geolocation] = GeolocationAPI(postcode);
  // const [birds] = BirdAPI([geolocation])
  // const [plants] = PlantAPI([geolocation])
  // console.log('1')
  // const [description] = WikiDescriptionAPI()
  
const handleSubmit = (event) => { 
  event.preventDefault();
  setPostcode(event.target.value);
  //console.log('2');
  new GeocodingModel(new GeocodingAPI(postcode)).getGeolocation(postcode)
    .then(geolocation => console.log(geolocation));
  // console.log('3');
  // console.log(geolocation);
  // const [birds] = BirdAPI([geolocation])
  // console.log(birds);
  // const [plants] = PlantAPI([geolocation])
  // console.log(plants);
}

const handleChange = (event) => {setPostcode(event.target.value)};

  return (
    <div className="location">
      <form onSubmit={handleSubmit} className="location-form">
        <input
          id="postcode"
          className="form-field"
          type="text"
          value={postcode}
          placeholder="Enter postcode here..."
          postcode="postcode"
          onChange={handleChange} 
        />
        <span id="postcode-error">Please enter a valid postcode</span>
        <button className="form-field" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Location;


{/* <form action='sessions/new' method='GET'>
<button class="botton" id="Login" type="submit" value="Log in"<>Log In</a></button>               
</form>  */}