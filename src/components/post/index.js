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
    <div className="post">
      <p className="post-commonName">{species.commonName}</p>
      <p className="post-latinName">{species.latinName}</p>
      <p className="post-kingdom">{species.kingdom}</p>
      <p className="post-family">{species.family}</p>
      <p className="post-description">{shortenDescription(species)}</p>
      {/* <p className="post-description">{species.description}</p> */}
      <p className="post-image">{species.image || species.image2}</p>
      <p className="post-link">{species.wikiLink || species.wikiLink2}</p>

    </div>
  );
};

export default Post;