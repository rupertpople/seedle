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
import usePlants from '../../hooks/plantAPI';
import mergePlantsandBirds from '../../hooks/mergeBirdsandPlants';

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const [birds, setBirds] = useState(null);
  const {  fetchGeolocation } = useGeolocation()
  const {  fetchBirds } = useBirds()
  const [plants, setPlants] = useState(null);
  const {  fetchPlants } = usePlants()
  const { merge } = mergePlantsandBirds()
  const [ plantsandbirds, setPlantsandBirds ] = useState(null)

const handleSubmit = async (event) => { 
  event.preventDefault();

  const geolocation = await fetchGeolocation(postcode);
  const birds = await fetchBirds(geolocation);
  setBirds(birds);
  const plants = await fetchPlants(geolocation);
  setPlants(plants);
  const species = await merge(birds,plants);
  setPlantsandBirds(species)
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const plantsandbirdsListNode =  plantsandbirds? (
  <div className="location">
    {plantsandbirds.map((species, index)=>{
      return <div key={index}>{species.commonName}</div>;
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
        <button className="form-field" type="submit">
          Search
        </button>
      </form>
      {plantsandbirdsListNode}
    </div>
  );
}

export default Location;