import React from 'react';
import Post from '../post';
//import NomineesAPI from '../../hooks/use-nominees';
import './index.css';

const PostList = () => {
  
    return (
      <div className="post-list">
        {posts.map((post) => (
          <Post key={`post-${post.id}`} {...post}/>
        ))}
      </div>
    );
  };
  
  export default PostList;
  
//   <div className="post-list">
//   {posts.map((post) => (
//     <Post key={`post-${post.id}`} {...post}/>
//   ))}
// </div>