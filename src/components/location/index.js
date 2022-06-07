import React, { useState } from 'react';
import './index.css'
import useGeolocation from '../../hooks/geocodingAPI';
import useBirds from '../../hooks/birdAPI';
import usePlants from '../../hooks/plantAPI';
import mergePlantsandBirds from '../../hooks/mergeBirdsandPlants';
import addImageandDescription from '../../hooks/addImageandDescription';
import PostList from '../post-list/index'

const Location = () => {
  const [ postcode, setPostcode ] = useState("");
  const {  fetchGeolocation } = useGeolocation();
  const {  fetchBirds } = useBirds();
  const {  fetchPlants } = usePlants();
  const { merge } = mergePlantsandBirds();
  const [plantsandbirds, setPlantsandBirds] = useState(null);
  const { addDescriptionandImage } = addImageandDescription();
  const [ message, setMessage ] = useState("");
  const [filter, setFilter] = useState("")
  const [birds, setBirds] = useState("");
  const [plants, setPlants] = useState("");
  const [checked, setChecked] = useState(false)

const handleSubmit = async (event) => { 
  event.preventDefault();
  const geolocation = await fetchGeolocation(postcode);
  const birds = await fetchBirds(geolocation);
  const plants = await fetchPlants(geolocation);
  const birdsDisplay = await addDescriptionandImage(birds)
  const plantsDisplay = await addDescriptionandImage(plants)
  const species = await merge(birds,plants);
  const species2 = await addDescriptionandImage(species);
  setPlantsandBirds(species2);
  setBirds(birdsDisplay)
  setPlants(plantsDisplay)
  setMessage(`Showing results for ${postcode}`);
  setFilter(true)
}

const handleChange = (event) => {
  setPostcode(event.target.value);
};

const handleChangePlants = async (event) => { 
  event.preventDefault();
  if (checked === false){
    setPlantsandBirds(plants)
    setChecked(true)
  } else if (checked === true) {
    setPlantsandBirds(plantsandbirds)
    setChecked(false)
  }
}
  

const handleChangeBirds= (event) => { 
  setPlantsandBirds(birds);
  console.log(plantsandbirds)
}
 
const speciesDetails = plantsandbirds? (
  <div className="postlistComponent">
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
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>

      <div className='filter'>
        <div className="filterbirds">{filter ? <div className="topping">
          <input type="checkbox" id="filterbirds" name="filterbirds" value="filterbirds" onChange={handleChangeBirds}/> View Birds
        </div> : null}</div>
        <div className="filterplants">{filter ? <div className="topping">
          <input type="checkbox" id="filterplants" name="filterplants" onChange={handleChangePlants}
          /> View Plants
        </div> : null}</div></div>

        {speciesDetails}
      
    </div>
  );
}

export default Location;
