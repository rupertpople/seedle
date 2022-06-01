import React from 'react';
// import './index.css'
import { useEffect } from "react";
import GeolocationAPI from '../../hooks/geocodingAPI';
import BirdAPI from '../../hooks/birdAPI';
import PlantAPI from '../../hooks/plantAPI';
import WikiDescriptionAPI from '../../hooks/wikipediaDescriptionAPI';
import WikiImageAPI from '../../hooks/wikipediaImageAPI'



const Location = ({postcode}) => {
  // const [geolocation] = GeolocationAPI(postcode);
  // const [birds] = BirdAPI([geolocation])
  // const [plants] = PlantAPI([geolocation])
  // console.log('1')
  // const [description] = WikiDescriptionAPI()
  
const handleSubmit = () => {
  console.log('2');
  console.log(postcode);
  const [geolocation] = GeolocationAPI(postcode);
  console.log('3');
  console.log(geolocation);
  const [birds] = BirdAPI([geolocation])
  console.log(birds);
  const [plants] = PlantAPI([geolocation])
  console.log(plants);
}

  return (
    <div className="location">
      <form onSubmit={handleSubmit()} className="location-form">
        <input
          id="postcode"
          className="form-field"
          type="text"
          placeholder="Enter postcode here..."
          postcode="postcode"
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