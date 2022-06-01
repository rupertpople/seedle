import React from 'react';
// import './index.css'
import { useState } from "react";
import PostList from '../post-list/index'
import GeolocationAPI from '../../hooks/geocodingAPI';
import BirdAPI from '../../hooks/birdAPI';
import PlantAPI from '../../hooks/plantAPI';
import WikiDescriptionAPI from '../../hooks/wikipediaDescriptionAPI';
import WikiImageAPI from '../../hooks/wikipediaImageAPI'



const Location = () => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const geolocation = { postcode }
    console.log(postcode)

  }

  return (
    <div className="location">
      <form onSubmit={handleSubmit} className="location-form">
        <input
          id="postcode"
          className="form-field"
          type="text"
          placeholder="Enter postcode here..."
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button className="form-field" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Location;


{/* <form action='sessions/new' method='GET'>
<button class="botton" id="Login" type="submit" value="Log in"<>Log In</a></button>               
</form>  */}