import React from "react";
import './index.css'

const Post = ({species}) => {

  return (
    <div className="post">
      <p className="post-commonName">{species.commonName}</p>
      <p className="post-latinName">{species.latinName}</p>
      <p className="post-kingdom">{species.kingdom}</p>
      <p className="post-family">{species.family}</p>

    </div>
  );
};

export default Post;