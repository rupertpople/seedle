import React from 'react';
// import './index.css'

const Post = ({name, species}) => {
  return (
    <div className="post">
      <p className="post-name">{name}</p>
      <p className="post-species">{species}</p>
    </div>
  );
};

export default Post;