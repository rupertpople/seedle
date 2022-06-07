import React from "react";
import './index.css'

const Post = ({species}) => {

  return (
    <div className="post">
      <p className="post-commonName">{post.commonName}</p>
      <p className="post-latinName">{post.latinName}</p>
      <p className="post-kingdom">{post.kingdom}</p>
      <p className="post-family">{post.family}</p>
      <p className="post-description">{post.description}</p>
      <p className="post-image">{post.image || post.image2}</p>
    </div>
  );
};

export default Post;