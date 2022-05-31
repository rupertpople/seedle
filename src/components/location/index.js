import React from 'react';
// import './index.css'
import { useEffect } from "react";
import GeolocationAPI from '../../hooks/geocodingAPI';



const Location = ({postcode}) => {
  console.log('10')
  const [geolocation] = GeolocationAPI();
  console.log(geolocation)


  return (
    <div className="location">
      <form className="location-form">
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