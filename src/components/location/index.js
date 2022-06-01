import React from 'react';
// import './index.css'
import { useEffect, useState} from "react";
import GeolocationAPI from '../../hooks/geocodingAPI';
import BirdAPI from '../../hooks/birdAPI';
import PlantAPI from '../../hooks/plantAPI';
import WikiDescriptionAPI from '../../hooks/wikipediaDescriptionAPI';
import WikiImageAPI from '../../hooks/wikipediaImageAPI'



const Location = ({postcode}) => {

  const [location, setLocation] = useState("")

const handleSubmit = () => {
  console.log('1')
  console.log(location)
  const [geocoding] = GeolocationAPI('w149ef')
  console.log('2')
  console.log(geocoding)
  setLocation(geocoding)
  console.log('3')
  console.log(location)
}

  return (
    <div className="location">
      <form className="location-form" onSubmit={handleSubmit()}>
        <input
          id="postcode"
          className="form-field"
          type="text"
          placeholder="Enter postcode here..."
          postcode="postcode"
          value={location}
          onChange={(e) => setLocation(e.target.value) }
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