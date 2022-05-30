import React from 'react';
// import './index.css'

const Post = ({commonName, latinName, kingdom, family}) => {
  return (
    <div className="post">
      <p className="post-commonName">{commonName}</p>
      <p className="post-latinName">{latinName}</p>
      <p className="post-kingdom">{kingdom}</p>
      <p className="post-family">{family}</p>

    </div>
  );
};

export default Post;