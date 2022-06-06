import React, { useEffect } from 'react';
import './index.css'
import { useState } from "react";
import useGeolocation from '../../hooks/geocodingAPI';
import useBirds from '../../hooks/birdAPI';
import usePlants from '../../hooks/plantAPI';
import mergePlantsandBirds from '../../hooks/mergeBirdsandPlants';
import addImageandDescription from '../../hooks/addImageandDescription';
import PostList from '../post-list/index'
import Post from '../post';

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const [birds, setBirds] = useState(null);
  const {  fetchGeolocation } = useGeolocation();
  const {  fetchBirds } = useBirds();
  const [plants, setPlants] = useState(null);
  const {  fetchPlants } = usePlants();
  const { merge } = mergePlantsandBirds();
  const [plantsandbirds, setPlantsandBirds] = useState(null);
  const { addDescriptionandImage } = addImageandDescription();

const handleSubmit = async (event) => { 
  event.preventDefault();

  const geolocation = await fetchGeolocation(postcode);
  const birds = await fetchBirds(geolocation);
  setBirds(birds);
  const plants = await fetchPlants(geolocation);
  setPlants(plants);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const speciesDetails = plantsandbirds? (
  <div className="location">
    <PostList speciesInfo={plantsandbirds}/>
  </div>
  ): null;

  return (
    <div className="location">
      <form onSubmit={handleSubmit} className="location-form">
        <h3>Your Online Local Species Explorer </h3>
        <div className="to-right"></div><div className="to-left"></div>
        <input
          id="postcode"
          className="postcode-field"
          type="text"
          value={postcode}
          placeholder="Enter postcode here..."
          postcode="postcode"
          onChange={handleChange}
        />
        <button className="form-field" type="submit">
          Search
        </button>
      </form>
      {speciesDetails}
    </div>
  );
}

export default Location;
