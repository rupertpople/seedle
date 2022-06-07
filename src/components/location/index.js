import React, { useState } from 'react';
import './index.css'
import useGeolocation from '../../hooks/geocodingAPI';
import useBirds from '../../hooks/birdAPI';
import usePlants from '../../hooks/plantAPI';
import mergePlantsandBirds from '../../hooks/mergeBirdsandPlants';
import addImageandDescription from '../../hooks/addImageandDescription';
import PostList from '../post-list/index'
import useMyGeoLocation from '../../hooks/useMyGeoLocation';
import formatMyGeoLocation from '../../hooks/formatMyGeoLocation';

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const {  fetchGeolocation } = useGeolocation();
  const {  fetchBirds } = useBirds();
  const {  fetchPlants } = usePlants();
  const { merge } = mergePlantsandBirds();
  const [plantsandbirds, setPlantsandBirds] = useState(null);
  const { addDescriptionandImage } = addImageandDescription();
  const [ message, setMessage ] = useState("");
  const myLocation = useMyGeoLocation();
  const { formattedLocation } = formatMyGeoLocation();
  const [geolocation, setGeolocation] = useState(null)

const handleSubmit = async (event) => { 
  event.preventDefault();

  const geolocation = await fetchGeolocation(postcode);
  const birds = await fetchBirds(geolocation);
  const plants = await fetchPlants(geolocation);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
  setMessage(`Showing results for ${postcode}`);
}

const handleSubmitGeolocation = async (event) => { 
  event.preventDefault();
  const location = await formattedLocation(myLocation)
  const birds = await fetchBirds(location);
  const plants = await fetchPlants(location);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};
 
const speciesDetails = plantsandbirds? (
  <div className="postlistComponent">
    <PostList speciesInfo={plantsandbirds}/>
  </div>
  ): null;

  return (
    <div className="location">
      <form className="location-form">
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
        <button onClick={handleSubmit} className="form-field" type="submit">
          Search
        </button>
        <button onClick={handleSubmitGeolocation} className="myLocation-form" type="submit">
          Use my location
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      {speciesDetails}
    </div>
  );
}

export default Location;
