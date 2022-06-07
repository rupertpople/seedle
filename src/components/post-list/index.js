import React from "react";
import Post from '../post/index';
import './index.css'

const PostList = (speciesInfo) => {
  const post = speciesInfo.speciesInfo[0]

const species = post? (
    <div className="post-list">
      {post.map((post, index) => (
       post = <Post key={index} species = {post}/>
      ))}
    </div>
    ): null;

return (
  <div className="post-list">
    {species}
  </div>
)
}


export default PostList;
