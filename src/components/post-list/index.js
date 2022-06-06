import React, { useState } from "react";
import Post from '../post/index';

const PostList = (speciesInfo) => {
  const [post, setPost] = useState(speciesInfo.speciesInfo[0])

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
