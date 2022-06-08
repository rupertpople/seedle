import React from "react";
import './index.css'

const Post = ({species}) => {

  function shortenDescription(species) {

    console.log(species.description)
    const description = species.description.substring(0,640)
    const lastIndexOfSpace = description.lastIndexOf(' ');
  
    if (lastIndexOfSpace === -1) {
      return description;
    }

    return description.substring(0, lastIndexOfSpace)+"...";
  }


  return (
    <div className="wrapper">
      <div className="cols">
        <div className="col">
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
              <p className="count"><span className="dot"></span>    Sightings reported in your area: {species.count}    <span className="dot"></span></p>
                <p>{shortenDescription(species)}</p>
                <p className="post-link">{species.wikiLink || species.wikiLink2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;