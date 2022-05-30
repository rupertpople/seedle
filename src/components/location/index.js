import React from 'react';
import './index.css'

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
        {/* <span id="postcode-error">Please enter a valid postcode</span> */}
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </div>


  
  );
}

export default Location;

{/* <div className="postcode-component">
  <div className="location">
    <form className="location-form">
      <input type="text" placeholder="name"/>
      <button>create</button>
    </form>
  </div>
</div> */}