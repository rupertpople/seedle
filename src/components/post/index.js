import React, { useState } from "react";
import './index.css'

const Post = ({species}) => {
  const [post, setPost] = useState(species);


  return (
    <div className="post">
      <p className="post-commonName">{post.commonName}</p>
      <p className="post-latinName">{post.latinName}</p>
      <p className="post-kingdom">{post.kingdom}</p>
      <p className="post-family">{post.family}</p>

    </div>
  );
};

export default Post;