import React, { useEffect } from 'react';
import './index.css'
import { useState } from "react";
import useGeolocation from '../../hooks/geocodingAPI';
import useBirds from '../../hooks/birdAPI';
import usePlants from '../../hooks/plantAPI';
import mergePlantsandBirds from '../../hooks/mergeBirdsandPlants';
import addImageandDescription from '../../hooks/addImageandDescription';

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const [birds, setBirds] = useState(null);
  const {  fetchGeolocation } = useGeolocation()
  const {  fetchBirds } = useBirds()
  const [plants, setPlants] = useState(null);
  const {  fetchPlants } = usePlants()
  const { merge } = mergePlantsandBirds()
  const [plantsandbirds, setPlantsandBirds] = useState(null)
  const { addDescriptionandImage } = addImageandDescription()

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
  console.log(species2)
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const plantsandbirdsListNode = plantsandbirds? (
  <div className="location">
    {plantsandbirds[0].map((species, index)=>{
      return <div key={index}>{species.commonName}</div>;
    })}
  </div>
  ): null;

  return (
    <div className="location">
      <h3>Your Online Local Species Explorer </h3>
      <form onSubmit={handleSubmit} className="location-form">
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
      {plantsandbirdsListNode}
    </div>
  );
}

export default Location;

