import React, { useState } from "react";
import Post from '../post/index.js';

const PostList = (speciesInfo) => {
  const [post, setPost] = useState(speciesInfo.speciesInfo[0])

const species = post? (
    <div className="post-list">
      {post.map((post) => {
       <Post species = {post}/>
      })}
    </div>
    ): null;

return (
  <div className="post-list">
    {species}
  </div>
)
}


export default PostList;
