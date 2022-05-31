import React from 'react';
// import './index.css'
import GeocodingAPI from '../../model/geocodingAPI';
import GeocodingModel from '../../model/geocodingModel';

const model = new GeocodingModel(new GeocodingAPI('w149ef'))
console.log('1')
console.log(model)
const geolocation = model.geolocation
console.log(geolocation)
const data = model.getGeolocation()
console.log('2')
console.log(data)

const Location = ({postcode}) => {
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