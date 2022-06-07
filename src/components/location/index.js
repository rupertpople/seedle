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
  const [ radius, setRadius ] = useState()
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
  const birds = await fetchBirds(geolocation, radius);
  const plants = await fetchPlants(geolocation, radius);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
  setMessage(`Showing results within ${radius}km of ${postcode}`);
}

const handleSubmitGeolocation = async (event) => { 
  event.preventDefault();
  const location = await formattedLocation(myLocation)
  const birds = await fetchBirds(location, radius);
  const plants = await fetchPlants(location, radius);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
  console.log(location)
  setMessage(`Showing results within ${radius}km of your location`);
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const handleRadius = (event) => {
  setRadius(event.target.value);
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
        <input
          id="radius"
          className="radius-field"
          type="text"
          value={radius}
          placeholder="Specify search area in kilometres..."
          postcode="radius"
          onChange={handleRadius}
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
