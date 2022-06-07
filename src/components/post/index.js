import React from "react";
import './index.css'

const Post = ({species}) => {

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="right-items">
            <p className="post-commonName">{species.commonName}</p>
            <p className="post-latinName">{species.latinName}</p>
            <p className="post-kingdom">{species.kingdom}</p>
            <p className="post-family">{species.family}</p>
          </div>
          <p className="post-image"><img src={species.image || species.image2} width="200px" alt="pic"></img></p>
        </div>
        <div class="flip-card-back">
            <p className="post-description">{species.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
