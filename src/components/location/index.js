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
  const [ longitude, setLongitude ] = useState(null);
  const [ latitude, setLatitude ] = useState(null);
  const { formattedLocation } = formatMyGeoLocation();

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
  const lat = JSON.stringify(myLocation.coordinates.lat)
  const long = JSON.stringify(myLocation.coordinates.lng)
  setLatitude(await formattedLocation(myLocation))
  console.log(2)
  console.log(latitude)
  // const latfloat = latitude.toFixed(4)
  // const lngfloat = longitude.toFixed(4)
  // console.log(latfloat)
  const birds = await fetchBirds(geolocation);
  const plants = await fetchPlants(geolocation);
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);

  {myLocation.loaded ? JSON.stringify(myLocation) : "Enable access to use location."}

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
