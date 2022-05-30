import React from 'react';
// import './index.css'

const Location = ({postcode}) => {
  return (
    <div className="location">
      <form onSubmit={this.handleSubmit}>
        <label>
          Postcode:
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Location;


{/* <form action='sessions/new' method='GET'>
<button class="botton" id="Login" type="submit" value="Log in"<>Log In</a></button>               
</form>  */}