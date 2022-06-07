import React from "react";
import './index.css'

const Post = ({species}) => {

  return (
    <div className="wrapper">
      <div className="cols">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{ backgroundImage: `url(${species.image || species.image2})` }}>
              <div className="inner">
                <p>{species.commonName}</p>
                <span>  {species.latinName}   </span>
                <span className="dot"></span>
                <span>   {species.kingdom}   </span>
                <span className="dot"></span>
                <span>   {species.family}  </span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>{species.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
