import React from 'react';
// import './index.css'
import { useState } from "react";
//import GeocodingAPI from '../../model/geocodingAPI';
//import GeocodingModel from '../../model/geocodingModel';
//import BirdAPI from '../../hooks/birdAPI';
//import PlantAPI from '../../hooks/plantAPI';
//import WikiDescriptionAPI from '../../hooks/wikipediaDescriptionAPI';
//import WikiImageAPI from '../../hooks/wikipediaImageAPI'
import useGeolocation from '../../hooks/geocodingAPI';
import useBirds from '../../hooks/birdAPI';

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const [birds, setBirds] = useState(null);
  const {  fetchGeolocation } = useGeolocation()
  const {  fetchBirds } = useBirds()

const handleSubmit = async (event) => { 
  event.preventDefault();

  const geolocation = await fetchGeolocation(postcode);
  const birds = await fetchBirds(geolocation);
  setBirds(birds);
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const birdListNode =  birds ? (
  <div className="location">
    {birds.map((bird, index)=>{
      return <div key={index}>{bird.commonName}</div>;
    })}
  </div>
  ): null;

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
      {birdListNode}
    </div>
  );
}

export default Location;